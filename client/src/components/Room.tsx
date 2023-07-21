import { Navigate, useParams } from 'react-router-dom';
import BottomTab from './BottomTab';
import UsersContainer from './UsersContainer';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import ChatContainer from './ChatContainer';
import joinRoom from '../socket/joinRoom';
import rtcInit from '../socket/RTCSignaling/rtcInit';
import useUsersState from '../states/useUserState';
import { setUsersStateFn } from '../utils/userState';

const Room = () => {
    const { id: roomId } = useParams();
    const [usersElement, setUsersState] = useUsersState();
    const [isLogout, setLogout] = useState(false);
    setUsersStateFn(setUsersState);

    if (!roomId) {
        return <>no</>;
    }

    useEffect(() => {
        joinRoom(roomId);
        rtcInit(roomId);
    }, []);

    return (
        <>
            {isLogout ? (
                <Navigate replace to={'/home'}></Navigate>
            ) : (
                <>
                    <Flex>
                        <UsersContainer>{...usersElement}</UsersContainer>
                        <ChatContainer roomId={roomId}></ChatContainer>
                        <div id={'allAudio'}></div>
                    </Flex>
                    <BottomTab setLogout={setLogout}></BottomTab>
                </>
            )}
        </>
    );
};

export default Room;
