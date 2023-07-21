import {
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogHeader,
    useDisclosure,
    AlertDialogFooter,
    AlertDialogCloseButton,
    Progress
} from '@chakra-ui/react';
import createRoomButtonProps from './props/createRoomButtonProps';
import { useRef, useState } from 'react';

const CreateRoom = () => {
    const [roomId, setRoomId] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);

    const roomCreateUrl = '/api/room/create';
    const prefixURL = 'http://localhost:8080/room/';

    const getRoomId = async () => {
        const createRoomRequest = await fetch(roomCreateUrl);

        if (createRoomRequest.ok) {
            const { data } = await createRoomRequest.json();
            const { roomId } = data;
            setRoomId(roomId);
        } else {
            console.log('errro');
        }
    };

    const onOpenCreateRoom = async () => {
        getRoomId();
        onOpen();
    };

    const onClickCopyRoomURL = async () => {
        const roomURL = prefixURL + roomId;
        navigator.clipboard.writeText(roomURL);
        onCloseAlertDialog();
    };

    const onCloseAlertDialog = () => {
        setRoomId('');
        onClose();
    };

    return (
        <>
            <Button {...createRoomButtonProps} onClick={onOpenCreateRoom}>
                Create a Room
            </Button>

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onCloseAlertDialog}
                isOpen={isOpen}
                isCentered>
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Room URL</AlertDialogHeader>
                    <AlertDialogCloseButton />

                    <AlertDialogBody>
                        {roomId ? (
                            <AlertDialogBody>{`${prefixURL + roomId}`}</AlertDialogBody>
                        ) : (
                            <Progress size="xs" isIndeterminate />
                        )}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button
                            isDisabled={!roomId ? true : false}
                            colorScheme="green"
                            ml={3}
                            onClick={onClickCopyRoomURL}>
                            Copy
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default CreateRoom;
