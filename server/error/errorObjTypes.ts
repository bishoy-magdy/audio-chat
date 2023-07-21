import type ErrorObj from '../models/errorObj';

const unauthorizedErrorObj: ErrorObj = {
    message: 'Please Login Again',
    HTTPCode: 401
};

const notFoundErrorObj: ErrorObj = {
    message: 'Content Not Found',
    HTTPCode: 404
};

const uploadingFailedErrorObj: ErrorObj = {
    message: 'Error: File uploading has failed. Please try again later.',
    HTTPCode: 406
};

const unexpectedErrorObj: ErrorObj = {
    message: 'Unexpected Error',
    HTTPCode: 500
};

const badRequestErrorObj: ErrorObj = {
    message: 'Bad Request',
    HTTPCode: 400
};

const roomAlreadyExistsErrorObj: ErrorObj = {
    message: 'Room Already Exists',
    HTTPCode: 409
};
export {
    uploadingFailedErrorObj,
    unauthorizedErrorObj,
    unexpectedErrorObj,
    badRequestErrorObj,
    notFoundErrorObj,
    roomAlreadyExistsErrorObj
};
