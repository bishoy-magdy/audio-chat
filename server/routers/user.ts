import { Router } from 'express';
import getUserInfo from '../handlers/user/getUserInfo';
import uploadProfileImg from '../handlers/user/uploadProfileImg';
import getProfileImg from '../handlers/user/getProfileImg';
import isAuthorized from '../middlewares/isAuthorized';

const user = Router();

user.get('/info', isAuthorized, getUserInfo);
user.get('/profile_image', getProfileImg);
user.post('/profile_image', isAuthorized, uploadProfileImg);

export default user;
