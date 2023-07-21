import RTCChannelPeers from './RTCChannelPeers';

const getUserDataChannel = (userId: string) => RTCChannelPeers.get(userId);

export default getUserDataChannel;
