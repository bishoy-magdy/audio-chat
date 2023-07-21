import type { ErrorRequestHandler, Response } from 'express';
import type HTTPError from '../error/HTTPError';
import { addLog } from '../dbs/mongodb/models/log/log';

const httpError: ErrorRequestHandler = async (err: HTTPError, req, res: Response, _next) => {
    const { message, HTTPCode } = err;
    try {
        await addLog({ status: 'error', HTTPCode, errorMessage: message, method: req.method, path: req.path });
    } finally {
        res.status(HTTPCode).send({ error: message });
    }
};

export default httpError;
