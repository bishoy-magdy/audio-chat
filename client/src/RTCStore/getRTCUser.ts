import RTCPeers from './RTCPeers';

const getRTCUser = (userId: string) => RTCPeers.get(userId);

export default getRTCUser;
