import { Button } from '@chakra-ui/react';
import { leaveGroupButtonProps } from './props/bottomTabProps';
import { Navigate } from 'react-router-dom';
import useLogout from '../states/useLogout';

const Signout = () => {
    const [logoutState, setLogout] = useLogout();

    return (
        <>
            {logoutState === 'ok' ? (
                <Navigate replace to={'/signin'}></Navigate>
            ) : (
                <Button
                    {...leaveGroupButtonProps}
                    onClick={() => {
                        setLogout(true);
                    }}>
                    Signout
                </Button>
            )}
        </>
    );
};

export default Signout;
