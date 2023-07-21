import { Router } from 'express';
import signin from '../handlers/account/signin';
import signup from '../handlers/account/signup';
import signout from '../handlers/account/signout';
import multer from 'multer';

const accountRouter = Router();
const multipart = multer().none();

accountRouter.post('/signin', multipart, signin);
accountRouter.post('/signup', multipart, signup);
accountRouter.get('/signout', signout);

export default accountRouter;
