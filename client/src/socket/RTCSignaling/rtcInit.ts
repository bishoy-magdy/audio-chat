import getSocket from '../getSocket';
import answerDefinition from './answerDefinition';
import handshakeDefinition from './handshakeDefinition';
import iceExchangeDefinition from './iceExchangeDefinition';
import offerDefinition from './offerDefinition';
import sdpDefinition from './sdpDefinition';
import roomLogoutDefinition from '../roomLogoutDefinition';

const rtcInit = (roomId: string) => {
    const socket = getSocket();
    handshakeDefinition();
    iceExchangeDefinition();
    offerDefinition();
    answerDefinition();
    sdpDefinition();
    roomLogoutDefinition();

    socket.on('connect', () => {
        console.log('id --->', socket.id);
        socket.emit('newUser', { data: { roomId, userId: socket.id } });
    });
};

export default rtcInit;
