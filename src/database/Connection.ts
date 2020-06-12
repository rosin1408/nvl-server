import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'pg',
    version: '11',
    connection: {
        host : '127.0.0.1',
        user : 'horizon',
        password : 'horizon',
        database : 'nvl'
    }
});

export default connection;