import getSocket from '../getSocket';
import getRTCUser from '../../RTCStore/getRTCUser';

const iceExchangeDefinition = () => {
    const socket = getSocket();

    socket.on('iceExchange', async ({ data }) => {
        const { ice, userId } = data;
        const peer = getRTCUser(userId);
        if (!peer) return;

        const isLocalSDPCreated = peer.localDescription !== null;

        if (ice && isLocalSDPCreated) {
            await peer.addIceCandidate(ice);
        }
    });
};

export default iceExchangeDefinition;
