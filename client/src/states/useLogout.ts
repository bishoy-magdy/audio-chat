import { Dispatch, SetStateAction, useState } from 'react';
import signoutHandler from '../api/signoutHandler';

const useLogout = (): [string, Dispatch<SetStateAction<boolean>>] => {
    const [logoutState, setLogoutState] = useState('pending');
    const [logout, setLogout] = useState(false);

    if (logout) {
        signoutHandler().then((response) => {
            if (response.ok) {
                setLogoutState('ok');
            } else {
                setLogoutState('error');
            }
        });
    }

    return [logoutState, setLogout];
};

export default useLogout;
