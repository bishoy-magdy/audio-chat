import { getIO } from './ioConnection';

const joinSocketDefinition = () => {
    const io = getIO();

    io.on('connection', (socket) => {
        socket.on('join', ({ data }) => {
            const { roomId } = data;
            socket.join(roomId);
        });
    });
};

export default joinSocketDefinition;
