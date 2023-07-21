import { Dispatch, SetStateAction } from 'react';
import getAudioStream from '../utils/getAudioStream';
import getSocket from './getSocket';
import RTCPeers from '../RTCStore/RTCPeers';
import RTCChannelPeers from '../RTCStore/RTCChannelPeers';
import UsersMetadata from '../RTCStore/UsersMetadata';

const roomLogout = async (setLogout: Dispatch<SetStateAction<boolean>>) => {
    const socket = getSocket();

    RTCPeers.forEach((peer, key) => {
        peer.close();
        RTCChannelPeers.delete(key);
        UsersMetadata.delete(key);
    });

    RTCPeers.clear();
    socket.close();
    (await getAudioStream()).getTracks()[0].stop();
    setLogout(true);
};

export default roomLogout;
