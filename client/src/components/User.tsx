import Avatar from './Avatar';
import AvatarProps from './models/AvatarProps';
import { Flex, Text } from '@chakra-ui/react';

const User = (props: AvatarProps) => {
    const { name, micStatus, src, id } = props;

    return (
        <Flex alignItems="center">
            <Avatar id={id} name={name} micStatus={micStatus} src={src} />
            <Text fontWeight="bold" margin={'0 0 0 2%'}>
                {name}
            </Text>
        </Flex>
    );
};

export default User;
