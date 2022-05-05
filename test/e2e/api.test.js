import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals';

import superTest from 'supertest';
import Server from '../../src/server.js';

//Definindo o teste
describe('API E2E Test Suite', () => {
    //O Que fazer
    test('GET - should return an array', async () => {
        const response = await superTest(Server).get('/');

        console.log(response.text);

        const data = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(data).toBeInstanceOf(Array);

    })

    test('POST - should save an item and return ok', async () => {
        const response = await superTest(Server)
            .post('/')
            .send({
                name: 'Átila',
                surname: 'Menezes'
            });
        const expectedResponse = JSON.stringify({ ok: 1 });

        const data = JSON.parse(response.text);

        //Exemplos básicos de validação
        expect(response.text).toStrictEqual(expectedResponse);
        expect(data.ok).toBe(1)
    })
    test('DELETE - should save an item and return ok', async () => {
        const response = await superTest(Server)
            .delete('/')
            .send();

        const expectedResponse = JSON.stringify({ ok: 1 });
        const data = JSON.parse(response.text);

        //Exemplos básicos de validação
        expect(response.text).toStrictEqual(expectedResponse);
        expect(data.ok).toBe(1)
    })
});