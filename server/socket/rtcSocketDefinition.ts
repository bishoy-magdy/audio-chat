import { getIO } from './ioConnection';

const rtcSocketDefinition = () => {
    const io = getIO();

    io.on('connection', (socket) => {
        socket.on('createOffer', ({ data }) => {
            console.log('create offer');

            const { to, userId } = data;
            socket.to(to).emit('offer', { data: { userId } });
        });

        socket.on('createAnswer', ({ data }) => {
            console.log('create answer');

            const { to, userId, sdp } = data;
            socket.to(to).emit('answer', { data: { userId, sdp } });
        });

        socket.on('createIceExchange', ({ data }) => {
            console.log('ice exchage');

            const { to, userId, ice } = data;
            socket.to(to).emit('iceExchange', { data: { userId, ice } });
        });

        socket.on('createSDP', ({ data }) => {
            console.log(' sdp');

            const { to, userId, sdp } = data;
            socket.to(to).emit('sdp', { data: { userId, sdp } });
        });
    });
};

export default rtcSocketDefinition;
