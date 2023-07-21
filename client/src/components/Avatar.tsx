import { Avatar as CAvatar, AvatarBadge } from '@chakra-ui/react';
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';
import AvatarProps from './models/AvatarProps';

const Avatar = (props: AvatarProps) => {
    const { name, micStatus, src } = props;

    return (
        <CAvatar name={name} src={src}>
            <AvatarBadge boxSize="1em" bg="white" style={{ color: 'black' }}>
                {micStatus === 'on' ? <BsFillMicFill /> : <BsFillMicMuteFill />}
            </AvatarBadge>
        </CAvatar>
    );
};

export default Avatar;
