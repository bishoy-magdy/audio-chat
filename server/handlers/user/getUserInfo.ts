import type { RequestHandler } from 'express';
import type UserSession from '../../models/userSession';

// Requires @isAuthorized Middleware
const getUserInfo: RequestHandler = async (_req, res, _next) => {
    const { name, email, profileImg } = res.locals.userSession as UserSession;
    return res.send({ data: { name, email, profileImg } });
};

export default getUserInfo;
