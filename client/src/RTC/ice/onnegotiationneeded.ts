import { Socket } from 'socket.io-client';
import getRTCUser from '../../RTCStore/getRTCUser';
import ClientToServerEvents from '../../models/clientToServerEvents';
import ServerToClientEvents from '../../models/serverToClientEvents';

const onnegotiationneeded = async (
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
    from: string,
    to: string
) => {
    console.log('onnegotiationneeded, <<<<<<');
    const peer = getRTCUser(to);
    if (!peer) return;

    const sdp = await peer.createOffer();
    await peer.setLocalDescription(sdp);
    socket.emit('createAnswer', {
        data: { to, userId: from, sdp }
    });
};

export default onnegotiationneeded;
