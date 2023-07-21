import type IOIncomingMessage from '../models/ioIncomingMessage';
import { getIO } from './ioConnection';

const chatSocketDefinition = () => {
    const io = getIO();

    io.on('connection', (socket) => {
        socket.on('newMessage', ({ data }) => {
            const { roomId, message } = data;
            const req = socket.request as IOIncomingMessage;
            const session = req.session;
            const userName = session.user?.name;

            if (!userName || !message) {
                return;
            }

            io.in(roomId).emit('newMessage', {
                data: {
                    userName,
                    message
                }
            });
        });
    });
};

export default chatSocketDefinition;
