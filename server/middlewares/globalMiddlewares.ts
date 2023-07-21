// Global Middlewares
import express, { type RequestHandler } from 'express';
import cookieParser from 'cookie-parser';

const globalMiddlewares: RequestHandler [] = [
    express.json(),
    cookieParser()
];

export default globalMiddlewares;
