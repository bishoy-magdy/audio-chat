import {
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogHeader,
    useDisclosure,
    AlertDialogFooter,
    Input
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const UpladImg = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);
    const imgUploadUrl = '/api/user/profile_image';
    return (
        <>
            <Button
                size={'lg'}
                colorScheme="whatsapp"
                leftIcon={<BsPersonCircle />}
                onClick={onOpen}>
                Add Profile Picture
            </Button>

            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Add Profile Picture
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <form
                                id="imgForm"
                                method="post"
                                action={imgUploadUrl}
                                encType="multipart/form-data">
                                <Input
                                    type="file"
                                    name="img"
                                    isRequired
                                    accept="image/png, image/gif, image/jpeg"
                                />
                            </form>
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                form="imgForm"
                                colorScheme="green"
                                onClick={onClose}
                                ml={3}>
                                Upload
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default UpladImg;
