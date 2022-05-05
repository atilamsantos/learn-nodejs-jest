import Server from './server.js';

const PORT = 3000;
const server = Server.listen(PORT)
    .on('listening', () => console.log(`running at ${PORT}`))