import getSocket from '../getSocket';
import RTCPeers from '../../RTCStore/RTCPeers';
import UsersMetadata from '../../RTCStore/UsersMetadata';

const handshakeDefinition = () => {
    const socket = getSocket();

    socket.on('newUser', ({ data }) => {
        const { userId, userInfo } = data;

        RTCPeers.set(userId, new RTCPeerConnection());
        UsersMetadata.set(userId, { userId, userInfo });

        socket.emit('knowMe', {
            data: {
                to: userId,
                userId: socket.id
            }
        });
    });

    socket.on('knowMe', ({ data }) => {
        const { userId, userInfo } = data;
        const myId = socket.id;

        RTCPeers.set(userId, new RTCPeerConnection());
        UsersMetadata.set(userId, { userId, userInfo });

        socket.emit('createOffer', {
            data: {
                to: userId,
                userId: myId
            }
        });
    });
};

export default handshakeDefinition;
