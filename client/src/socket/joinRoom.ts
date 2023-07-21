import getSocket from './getSocket';

const joinRoom = (roomId: string) => {
    const socket = getSocket();
    socket.emit('join', { data: { roomId } });
};

export default joinRoom;
