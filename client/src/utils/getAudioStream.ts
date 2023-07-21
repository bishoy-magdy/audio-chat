let audioStream: MediaStream;

const getAudioStream = async () => {
    if (!audioStream) {
        audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
    }

    return audioStream;
};

export default getAudioStream;
