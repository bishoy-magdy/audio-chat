import express from 'express';
import globalMiddlewares from './middlewares/globalMiddlewares';
import userRouter from './routers/user';
import accountRouter from './routers/account';
import httpError from './middlewares/httpError';
import roomRouter from './routers/room';
import { initIO } from './socket/ioConnection';
import { initMongo } from './dbs/mongodb/db';
import { initRedis } from './dbs/redis/redis';
import sessionHandler from './handlers/session/sessionHandler';
import logger from './middlewares/logger';
import isIOAuthorized from './middlewares/isIOAuthorized';
import { createServer } from 'http';
import getServerConf from './conf/getServerConf';

(async () => {
    const {
        serverPort,
        mongoURL,
        redisURL,
        dbName
    } = getServerConf();

    const app = express();
    const server = createServer(app);

    await Promise.all([
        initMongo(mongoURL, dbName),
        initRedis(redisURL)
    ]);

    const io = initIO(server);
    io.engine.use(sessionHandler());
    io.engine.use(isIOAuthorized);

    app.use(...globalMiddlewares)
        .use(sessionHandler())
        .use(logger)
        .use('/api', accountRouter)
        .use('/api/user', userRouter)
        .use('/api/room', roomRouter);

    // error handler
    app.use(httpError);

    server.listen(serverPort, () => {
        console.log(`server is running on port ${serverPort}`);
    });
})();
