import { Button, Container, Divider, Heading, SimpleGrid, Textarea } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import { UsersContainerProps } from './props/usersContainerProps';
import { ChangeEvent, useEffect, useState } from 'react';
import { openChatChannel, sendMessage } from '../socket/chatSocket';
import useChatScroll from '../states/useChatScroll';

const ChatContainer = (props: { roomId: string }) => {
    const { roomId } = props;
    const [messages, addMessage] = useState<JSX.Element[]>([]);
    const [message, setMessage] = useState('');
    const scrollRef = useChatScroll(messages);
    const sendMessageHandler = () => sendMessage(roomId, message);
    const setMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };
    useEffect(() => {
        openChatChannel(addMessage);
    }, []);

    return (
        <Container {...UsersContainerProps}>
            <Heading as="h5" size="sm">
                In-call Messages
            </Heading>

            <Divider />

            <Container overflow={'auto'} h="50vh" ref={scrollRef}>
                <SimpleGrid columns={1} spacing={'5'}>
                    {...messages}
                </SimpleGrid>
            </Container>

            <Divider />

            <Container>
                <Textarea onChange={setMessageHandler} placeholder="type a message"></Textarea>
                <Button
                    onClick={sendMessageHandler}
                    float={'right'}
                    margin={'5px'}
                    rightIcon={<AiOutlineSend />}
                    colorScheme={'teal'}>
                    Sent
                </Button>
            </Container>
        </Container>
    );
};

export default ChatContainer;
