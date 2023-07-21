import type { RequestHandler } from 'express';
import { addLog } from '../dbs/mongodb/models/log/log';

const logger: RequestHandler = async (req, _res, next) => {
    try {
        console.log({ status: 'log', method: req.method, path: req.path }, '<<<<<<<x');

        await addLog({ status: 'log', method: req.method, path: req.path });
    } finally {
        next();
    }
};

export default logger;
