import RTCChannelPeers from './RTCChannelPeers';
import RTCPeers from './RTCPeers';
import UsersMetadata from './UsersMetadata';

const removeUserStore = (userId: string) => {
    RTCPeers.delete(userId);
    RTCChannelPeers.delete(userId);
    UsersMetadata.delete(userId);
};

export default removeUserStore;
