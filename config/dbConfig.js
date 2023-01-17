module.exports = {
    HOST: 'localhost',
    USER: 'testingdb',
    PASSWORD: 'password',
    DB: 'nodedb',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}