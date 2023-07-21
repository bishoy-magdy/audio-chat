import getSocket from './getSocket';
import RTCPeers from '../RTCStore/RTCPeers';
import getRTCUser from '../RTCStore/getRTCUser';

const roomLogoutDefinition = () => {
    const socket = getSocket();
    socket.on('removeUser', ({ data }) => {
        const { userId } = data;
        const peer = getRTCUser(userId);
        if (!peer) return;

        console.log('delete userId', userId);
        peer.close();
        RTCPeers.delete(userId);
    });
};

export default roomLogoutDefinition;
