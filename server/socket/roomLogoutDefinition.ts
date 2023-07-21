import { getIO } from './ioConnection';

const roomLogoutDefinition = () => {
    const io = getIO();

    io.on('connection', (socket) => {
        socket.on('roomLogout', ({ data }) => {
            const { userId, roomId } = data;
            console.log('remove -->>', userId);

            socket.broadcast.to(roomId).emit('removeUser', {
                data: { userId }
            });
            socket.disconnect();
        });
    });
};

export default roomLogoutDefinition;
