import session from 'express-session';
import { redisSessionStore } from '../../dbs/redis/redis';
import type UserSession from '../../models/userSession';
import { type RequestHandler } from 'express';

declare module 'express-session' {
    interface SessionData {
      user: UserSession
    }
  }

let sessionHandlerObj: RequestHandler;

const sessionHandler = () => {
    const twoWeeks = 14 * 24 * 60 * 60 * 1000;
    if (!sessionHandlerObj) {
        sessionHandlerObj = session({
            name: 'sessionId',
            store: redisSessionStore(),
            saveUninitialized: false,
            resave: false,
            secret: 'keyboard cat',
            cookie: {
                maxAge: twoWeeks, // expired after two weeks (signin again).
                httpOnly: true,
                sameSite: 'strict'
            }
        });
    }

    return sessionHandlerObj;
};

export default sessionHandler;
