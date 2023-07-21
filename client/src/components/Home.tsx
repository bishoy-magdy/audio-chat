import {
    Container,
    Center,
    Wrap,
    WrapItem,
    Progress,
    Avatar,
    Tag,
    TagLabel
} from '@chakra-ui/react';
import { UsersContainerProps } from './props/usersContainerProps';
import { wrapTabProps } from './props/bottomTabProps';
import UpladImg from './UploadImg';
import Signout from './Signout';
import CreateRoom from './CreateRoom';
import useUserStatus from '../states/useUserStatus';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const userStatus = useUserStatus();

    if (userStatus === 'pending') {
        return (
            <>
                <Progress size="sm" isIndeterminate />
            </>
        );
    } else if (userStatus === 'error') {
        return (
            <>
                <Navigate replace to={'/signin'}></Navigate>
            </>
        );
    } else {
        const { name, profileImg } = userStatus;
        return (
            <>
                <Container {...UsersContainerProps} textAlign={'center'}>
                    <CreateRoom></CreateRoom>
                </Container>

                <Wrap {...wrapTabProps}>
                    <WrapItem>
                        <Center h="80px">
                            <Tag size="md" colorScheme="teal" borderRadius="full">
                                <Avatar src={profileImg} name={name}></Avatar>
                                <TagLabel fontWeight={'bold'} margin={'5'}>
                                    {name}
                                </TagLabel>
                            </Tag>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center h="80px">
                            <UpladImg></UpladImg>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center h="80px">
                            <Signout></Signout>
                        </Center>
                    </WrapItem>
                </Wrap>
            </>
        );
    }
};

export default Home;
