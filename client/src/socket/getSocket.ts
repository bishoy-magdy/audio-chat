import io, { Socket } from 'socket.io-client';
import ClientToServerEvents from '../models/clientToServerEvents';
import ServerToClientEvents from '../models/serverToClientEvents';

let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

const getSocket = () => {
    if (!socket) {
        socket = io('/', { path: '/ws' });
    }

    return socket;
};

export default getSocket;
