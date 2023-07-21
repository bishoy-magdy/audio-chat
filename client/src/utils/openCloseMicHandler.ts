import RTCChannelPeers from '../RTCStore/RTCChannelPeers';
import getAudioStream from './getAudioStream';

const openCloseMicHandler = async () => {
    const audioStream = await getAudioStream();

    audioStream.getAudioTracks().forEach((stack) => {
        stack.enabled = !stack.enabled;
    });

    RTCChannelPeers.forEach((channel) => {
        channel.send('openCloseMic');
    });
};

export default openCloseMicHandler;
