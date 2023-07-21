import { Server as IOServer } from 'socket.io';
import setSocketDefinitions from './setSocketDefinitions';
import type ClientToServerEvents from '../models/clientToServerEvents';
import type ServerToClientEvents from '../models/serverToClientEvents';
import type { Server, IncomingMessage, ServerResponse } from 'http';

let io: IOServer<ClientToServerEvents, ServerToClientEvents>;

const initIO = (server: Server<typeof IncomingMessage, typeof ServerResponse>) => {
    if (!io) {
        io = new IOServer<ClientToServerEvents, any, any, ServerToClientEvents>(server, {
            path: '/ws'
        });

        setSocketDefinitions();
    }
    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error('No connection was established');
    }
    return io;
};

export { initIO, getIO };
