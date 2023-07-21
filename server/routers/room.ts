import { Router } from 'express';
import createRoom from '../handlers/room/createRoom';
import isAuthorized from '../middlewares/isAuthorized';

const roomRouter = Router();

roomRouter.get('/create', isAuthorized, createRoom);

export default roomRouter;
