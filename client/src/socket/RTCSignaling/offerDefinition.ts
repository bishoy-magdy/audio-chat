import onicecandidate from '../../RTC/ice/onicecandidate';
import oniceconnectionstatechange from '../../RTC/ice/oniceconnectionstatechange';
import onnegotiationneeded from '../../RTC/ice/onnegotiationneeded';
import onmessage from '../../RTC/message/onmessage';
import RTCChannelPeers from '../../RTCStore/RTCChannelPeers';
import getRTCUser from '../../RTCStore/getRTCUser';
import getAudioStream from '../../utils/getAudioStream';
import { addAudioTrack } from '../../utils/userState';
import getSocket from '../getSocket';

const offerDefinition = () => {
    const socket = getSocket();

    socket.on('offer', async ({ data }) => {
        const { userId } = data;
        const myId = socket.id;
        const peer = getRTCUser(userId);
        if (!peer) return;

        const localStream = await getAudioStream();

        localStream.getTracks().forEach((track) => peer.addTrack(track, localStream));

        peer.onicecandidate = (e) => onicecandidate(socket, myId, userId, e);
        peer.ontrack = (e) => addAudioTrack(userId, e.streams[0]);
        peer.oniceconnectionstatechange = () => oniceconnectionstatechange(userId);
        peer.onnegotiationneeded = () => onnegotiationneeded(socket, myId, userId);

        const dataChannel = peer.createDataChannel('micState');
        dataChannel.onmessage = (e) => onmessage(userId, e);
        RTCChannelPeers.set(userId, dataChannel);
    });
};

export default offerDefinition;
