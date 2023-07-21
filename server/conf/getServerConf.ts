import dotenv from 'dotenv';
import type ServerConf from '../models/serverConf';

const getServerConf = (): ServerConf | never => {
    dotenv.config();

    const NODE_ENV = process.env.NODE_ENV;

    if (NODE_ENV === 'production') {
        const serverPort = process.env.SERVER_PORT;
        const mongoURL = process.env.MONGO_URL;
        const redisURL = process.env.REDIS_URL;
        const dbName = process.env.DATA_BASE_NAME;
        const allExist = serverPort && mongoURL && redisURL && dbName;

        if (allExist) {
            console.log('production mode');

            return {
                serverPort: parseInt(serverPort, 10),
                mongoURL,
                redisURL,
                dbName
            };
        }

        throw new Error('env variables not found');
    }

    console.log('development mode');

    // development mode
    return {
        serverPort: 5000,
        mongoURL: 'mongodb://localhost:27017',
        redisURL: 'redis://localhost:6379',
        dbName: 'audioChat'
    };
};

export default getServerConf;
