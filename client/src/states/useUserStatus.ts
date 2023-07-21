import { useEffect, useState } from 'react';

const useUserStatus = () => {
    const [userStatus, setUserStatus] = useState<
        'pending' | 'error' | { name: string; profileImg: string }
    >('pending');

    const userInfoUrl = '/api/user/info';

    useEffect(() => {
        const getStatus = async () => {
            const getStatus = await fetch(userInfoUrl);

            if (getStatus.ok) {
                const { data } = await getStatus.json();
                const { name, profileImg } = data;
                setUserStatus({ name, profileImg });
            } else {
                setUserStatus('error');
            }
        };

        getStatus();
    }, []);

    return userStatus;
};

export default useUserStatus;
