import type { RequestHandler } from 'express';
import multer from 'multer';
import { updateImgProfiel } from '../../dbs/mongodb/models/user/user';
import type UserSession from '../../models/userSession';
import HTTPError from '../../error/HTTPError';
import { uploadingFailedErrorObj } from '../../error/errorObjTypes';

const upload = multer({ dest: './media/imgs' }).single('img');

// Requires @isAuthorized Middleware
const uploadProfileImg: RequestHandler = async (req, res, next) => {
    (async () => {
        upload(req, res, async (err) => {
            if (err || !req.file) {
                next(new HTTPError(uploadingFailedErrorObj));
                return;
            }

            const { filename } = req.file;
            const { email } = res.locals.userSession as UserSession;
            const userSession = req.session.user as UserSession;
            const imgUrl = `/api/user/profile_image?id=${filename}`;

            userSession.profileImg = imgUrl;
            await updateImgProfiel(email, imgUrl);

            res.redirect('back');
        });
    })().catch(() => { next(new HTTPError(uploadingFailedErrorObj)); });
};

export default uploadProfileImg;
