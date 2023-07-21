import { ButtonProps, WrapProps } from '@chakra-ui/react';
import { IoIosExit } from 'react-icons/io';
import { BsFillMicMuteFill } from 'react-icons/bs';

export const wrapTabProps: WrapProps = {
    spacing: '5%',
    justify: 'center',
    bg: '#FFF0F5',
    borderTopRadius: '50px',
    className: 'fixed-bottom',
    width: '90%',
    marginLeft: '5%'
};

export const muteButtonProps: ButtonProps = {
    colorScheme: 'teal',
    size: 'lg',
    leftIcon: <BsFillMicMuteFill />
};

export const leaveGroupButtonProps: ButtonProps = {
    colorScheme: 'red',
    size: 'lg',
    rightIcon: <IoIosExit />
};
