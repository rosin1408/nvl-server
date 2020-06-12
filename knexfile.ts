import path from 'path';

module.exports = {
    client: 'pg',
    version: '11',
    connection: {
        host : '127.0.0.1',
        user : 'horizon',
        password : 'horizon',
        database : 'nvl'
    },
    migrations:{ 
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds:{ 
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}