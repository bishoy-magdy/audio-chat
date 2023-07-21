import type { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { createUser } from '../../dbs/mongodb/models/user/user';
import HTTPError from '../../error/HTTPError';
import { badRequestErrorObj, unexpectedErrorObj } from '../../error/errorObjTypes';

const signupHandler: RequestHandler = async (req, res, next) => {
    (async () => {
        const { name, email, password } = req.body;
        const allExist = name && email && password;

        if (!allExist) {
            next(new HTTPError(badRequestErrorObj));
            return;
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const result = await createUser({ name, email, password: passwordHash, profileImg: '' });
        const { acknowledged, insertedId } = result;

        if (!acknowledged) {
            next(new HTTPError(unexpectedErrorObj));
            return;
        }

        req.session.user = { id: insertedId.toString(), name, email, profileImg: '' };
        return res.send({ data: { name, email, profileImg: '' } });
    })().catch(() => { next(new HTTPError(unexpectedErrorObj)); });
};

export default signupHandler;
