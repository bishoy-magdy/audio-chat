import getSocket from '../getSocket';
import getRTCUser from '../../RTCStore/getRTCUser';

const sdpDefinition = () => {
    const socket = getSocket();

    socket.on('sdp', async ({ data }) => {
        const { sdp, userId } = data;
        const peer = getRTCUser(userId);

        if (!peer) return;

        if (sdp) {
            await peer.setRemoteDescription(sdp);
        }
    });
};

export default sdpDefinition;
