import { createServer } from 'http';
import { once } from 'events';
import { randomUUID } from 'crypto';

const Database = new Map();

function getResponseJSON(data, response){
    return response.end(JSON.stringify(data));
}

async function handler(request, response) {
    const { method } = request;

    switch (method) {
        case 'GET':
            return getResponseJSON([...Database.values()], response);
            break;
        case 'POST':
            const body = await once(request, 'data');
            const data = JSON.parse(body);

            Database.set(randomUUID(), data);

            console.log('recebido', data);

            return getResponseJSON({ok: 1}, response)
            break;
        case 'DELETE':
            //Apenas para simular a deleção da base.
            Database.clear();
            return getResponseJSON({ok: 1}, response)
            break;
    }
}

export default createServer(handler)