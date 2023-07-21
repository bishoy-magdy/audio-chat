import type { Request, RequestHandler } from 'express';
import HTTPError from '../error/HTTPError';
import { unauthorizedErrorObj } from '../error/errorObjTypes';

const isAuthorized: RequestHandler = async (req: Request, res, next) => {
    const { user: userSession } = req.session;

    if (userSession) {
        Object.assign(res.locals, { userSession });
        next();
    } else {
        next(new HTTPError(unauthorizedErrorObj));
    }
};

export default isAuthorized;
