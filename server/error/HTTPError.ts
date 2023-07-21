import type ErrorObj from '../models/errorObj';

class HTTPError extends Error {
    HTTPCode: number;

    constructor (errorObj: ErrorObj) {
        const { message, HTTPCode } = errorObj;
        super(message);
        this.HTTPCode = HTTPCode;
    }
}

export default HTTPError;
