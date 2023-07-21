import { Button, Center, Wrap, WrapItem } from '@chakra-ui/react';
import { leaveGroupButtonProps, muteButtonProps, wrapTabProps } from './props/bottomTabProps';
import roomLogout from '../socket/roomLogout';
import openCloseMicHandler from '../utils/openCloseMicHandler';
import { Dispatch, SetStateAction } from 'react';

const BottomTab = (props: { setLogout: Dispatch<SetStateAction<boolean>> }) => {
    const { setLogout } = props;
    return (
        <Wrap {...wrapTabProps}>
            <WrapItem>
                <Center h="80px">
                    <Button {...muteButtonProps} onClick={openCloseMicHandler}>
                        open/close Mic
                    </Button>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center h="80px">
                    <Button
                        {...leaveGroupButtonProps}
                        onClick={() => {
                            roomLogout(setLogout);
                        }}>
                        Leave Room
                    </Button>
                </Center>
            </WrapItem>
        </Wrap>
    );
};

export default BottomTab;
