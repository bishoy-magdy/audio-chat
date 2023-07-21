import { type RequestHandler } from 'express';
import { randomUUID, createHash } from 'crypto';
import { addRoom } from '../../dbs/redis/redis';
import HTTPError from '../../error/HTTPError';
import { roomAlreadyExistsErrorObj, unexpectedErrorObj } from '../../error/errorObjTypes';

const createRoom: RequestHandler = async (_req, res, next) => {
    (async () => {
        const roomId = createHash('md5').update(randomUUID()).digest('hex');
        const ac = await addRoom(roomId);

        if (ac) {
            console.log('create a room', roomId);
            return res.send({ data: { roomId } });
        } else {
            next(new HTTPError(roomAlreadyExistsErrorObj));
        }
    })().catch(() => { next(new HTTPError(unexpectedErrorObj)); });
};

export default createRoom;
