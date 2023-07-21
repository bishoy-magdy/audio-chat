import type { RequestHandler } from 'express';
import HTTPError from '../error/HTTPError';
import { unauthorizedErrorObj } from '../error/errorObjTypes';

const isIOAuthorized: RequestHandler = async (req, _res, next) => {
    const { user: userSession } = req.session;

    if (userSession) {
        next();
    } else {
        next(new HTTPError(unauthorizedErrorObj));
    }
};

export default isIOAuthorized;
