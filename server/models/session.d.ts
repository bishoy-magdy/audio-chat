import type UserSession from './userSession';

export declare module 'express-session' {
    interface SessionData {
      user: UserSession
    }
  }
