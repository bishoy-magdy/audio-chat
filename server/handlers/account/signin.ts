import type { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import HTTPError from '../../error/HTTPError';
import { findUserByEmail } from '../../dbs/mongodb/models/user/user';
import {
    badRequestErrorObj,
    notFoundErrorObj,
    unauthorizedErrorObj,
    unexpectedErrorObj
} from '../../error/errorObjTypes';

const signinHandler: RequestHandler = async (req, res, next) => {
    (async () => {
        const { email, password } = req.body;
        const allExist = email && password;

        if (!allExist) {
            next(new HTTPError(badRequestErrorObj));
            return;
        }

        const user = await findUserByEmail(email);

        if (!user) {
            next(new HTTPError(notFoundErrorObj));
            return;
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            next(new HTTPError(unauthorizedErrorObj));
            return;
        }

        const { _id, name, profileImg } = user;
        req.session.user = { id: _id.toString(), name, email, profileImg };

        return res.send({ data: { name, email, profileImg } });
    })().catch(() => { next(new HTTPError(unexpectedErrorObj)); });
};

export default signinHandler;
