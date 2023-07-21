import RTCChannelPeers from '../../RTCStore/RTCChannelPeers';
import onmessage from '../message/onmessage';

const ondatachannel = (userId: string, e: RTCDataChannelEvent) => {
    const dataChannel = e.channel;
    dataChannel.onmessage = (e) => onmessage(userId, e);
    RTCChannelPeers.set(userId, dataChannel);
};

export default ondatachannel;
