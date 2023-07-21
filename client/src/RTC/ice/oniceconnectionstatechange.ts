import UserState from '../../models/userState';
import getRTCUser from '../../RTCStore/getRTCUser';
import removeUserStore from '../../RTCStore/removeUserStore';
import UsersMetadata from '../../RTCStore/UsersMetadata';
import { addUserState, removeUserState } from '../../utils/userState';

const oniceconnectionstatechange = (userId: string) => {
    const peer = getRTCUser(userId);
    if (!peer) return;

    if (peer.iceConnectionState == 'connected') {
        console.log('conected!!!!!!!!!!');
        const userMetadata = UsersMetadata.get(userId);
        if (!userMetadata) return;

        const { userInfo, userId: peerId } = userMetadata;
        const { name, profileImg } = userInfo;
        const newUser: UserState = { name, profileImg, micStatus: 'on' };
        addUserState(peerId, newUser);
    }

    if (peer.iceConnectionState == 'disconnected') {
        console.log('Disconnected');
        removeUserState(userId);
        removeUserStore(userId);
    }
};

export default oniceconnectionstatechange;
