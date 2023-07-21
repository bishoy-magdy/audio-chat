import type { RequestHandler } from 'express';
import { createReadStream, constants } from 'fs';
import { access } from 'fs/promises';
import { join } from 'path';
import HTTPError from '../../error/HTTPError';
import { notFoundErrorObj } from '../../error/errorObjTypes';

const getProfileImg: RequestHandler = async (req, res, next) => {
    (async () => {
        const { id } = req.query;
        const imgPath = join(__dirname, '..', '..', 'media', 'imgs', id as string);

        await access(imgPath, constants.R_OK);
        createReadStream(imgPath).pipe(res);
    })().catch(() => { next(new HTTPError(notFoundErrorObj)); });
};

export default getProfileImg;
