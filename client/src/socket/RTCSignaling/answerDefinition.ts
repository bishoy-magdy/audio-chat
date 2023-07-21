import ondatachannel from '../../RTC/datachannel/ondatachannel';
import onicecandidate from '../../RTC/ice/onicecandidate';
import oniceconnectionstatechange from '../../RTC/ice/oniceconnectionstatechange';
import getAudioStream from '../../utils/getAudioStream';
import { addAudioTrack } from '../../utils/userState';
import getSocket from '../getSocket';
import getRTCUser from '../../RTCStore/getRTCUser';

const answerDefinition = () => {
    const socket = getSocket();

    socket.on('answer', async ({ data }) => {
        const { userId, sdp } = data;
        const peer = getRTCUser(userId);
        const myId = socket.id;

        if (!peer) return;

        const localStream = await getAudioStream();

        localStream.getTracks().forEach((track) => peer.addTrack(track, localStream));

        peer.onicecandidate = (e: RTCPeerConnectionIceEvent) =>
            onicecandidate(socket, myId, userId, e);

        peer.ontrack = (e: RTCTrackEvent) => addAudioTrack(userId, e.streams[0]);
        peer.ondatachannel = (e: RTCDataChannelEvent) => ondatachannel(userId, e);
        peer.oniceconnectionstatechange = () => oniceconnectionstatechange(userId);

        await peer.setRemoteDescription(sdp);
        const sdpServer = await peer.createAnswer();
        await peer.setLocalDescription(sdpServer);

        socket.emit('createSDP', {
            data: { to: userId, userId: myId, sdp: sdpServer }
        });
    });
};

export default answerDefinition;
