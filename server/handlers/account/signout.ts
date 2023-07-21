import type { RequestHandler } from 'express';
import HTTPError from '../../error/HTTPError';
import { unexpectedErrorObj } from '../../error/errorObjTypes';

const signoutHandler: RequestHandler = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            next(new HTTPError(unexpectedErrorObj));
        } else {
            res.clearCookie('sessionId');
            return res.sendStatus(200);
        }
    });
};

export default signoutHandler;
