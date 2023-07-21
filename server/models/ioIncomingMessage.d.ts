import { type CookieOptions } from 'express';
import type UserSession from './userSession';
import { type IncomingMessage } from 'http';

interface IOIncomingMessage extends IncomingMessage {
    session: {
        user?: UserSession
        cookie?: CookieOptions
    }
};

export default IOIncomingMessage;
