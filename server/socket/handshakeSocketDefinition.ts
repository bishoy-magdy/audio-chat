import { roomIsExists } from '../dbs/redis/redis';
import type IOIncomingMessage from '../models/ioIncomingMessage';
import type UserSession from '../models/userSession';
import { getIO } from './ioConnection';

const handshakeSocketDefinition = () => {
    const io = getIO();

    io.on('connection', (socket) => {
        socket.on('newUser', async ({ data }) => {
            const { userId, roomId } = data;
            const isExists = await roomIsExists(roomId);

            const req = socket.request as IOIncomingMessage;
            const userSession = req.session.user as UserSession;
            const { name, profileImg } = userSession;
            const userInfo = { name, profileImg };

            if (isExists) {
                socket.to(roomId).emit('newUser', { data: { userId, userInfo } });
            } else {
                socket.to(roomId).emit('error', { data: { message: 'room not found' } });
                socket.disconnect();
            }
        });

        socket.on('knowMe', ({ data }) => {
            const { to, userId } = data;
            const req = socket.request as IOIncomingMessage;
            const userSession = req.session.user as UserSession;
            const { name, profileImg } = userSession;
            const userInfo = { name, profileImg };

            socket.to(to).emit('knowMe', { data: { userId, userInfo } });
        });
    });
};

export default handshakeSocketDefinition;
