import { Socket } from 'socket.io-client';
import ClientToServerEvents from '../../models/clientToServerEvents';
import ServerToClientEvents from '../../models/serverToClientEvents';

const onicecandidate = (
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
    from: string,
    to: string,
    e: RTCPeerConnectionIceEvent
) => {
    socket.emit('createIceExchange', {
        data: { to, userId: from, ice: e.candidate as RTCIceCandidate }
    });
};

export default onicecandidate;
