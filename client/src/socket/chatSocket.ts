import { Dispatch, SetStateAction } from 'react';
import CardMessage from '../components/CardMessage';
import getSocket from './getSocket';

const sendMessage = (roomId: string, message: string) => {
    const socket = getSocket();
    socket.emit('newMessage', { data: { roomId, message } });
};

const openChatChannel = (addMessage: Dispatch<SetStateAction<JSX.Element[]>>) => {
    const socket = getSocket();
    socket.on('newMessage', ({ data }) => {
        const { userName, message } = data;
        const cardMessage = CardMessage({ userName, message });
        addMessage((m) => [...m, cardMessage]);
    });
};

export { sendMessage, openChatChannel };
