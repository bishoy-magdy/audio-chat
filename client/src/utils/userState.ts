import { Dispatch, SetStateAction } from 'react';
import UserState from '../models/userState';

let usersStateFn: Dispatch<SetStateAction<Map<string, UserState>>>;

const setUsersStateFn = (usersStateSetter: Dispatch<SetStateAction<Map<string, UserState>>>) => {
    usersStateFn = usersStateSetter;
};

const addUserState = (userId: string, userState: UserState) => {
    usersStateFn((users) => {
        const audioTrack = users.get(userId)?.audioTrack;
        users.set(userId, { ...userState, audioTrack });
        return new Map(users);
    });
};

const removeUserState = (userId: string) => {
    usersStateFn((users) => {
        document.getElementById(userId)?.remove();
        users.delete(userId);
        return new Map(users);
    });
};

const addAudioTrack = (userId: string, track: MediaStream) => {
    usersStateFn((users) => {
        let user = users.get(userId);

        if (!user) {
            user = {
                name: '',
                profileImg: '',
                micStatus: 'off'
            };
        }

        user.audioTrack = track;
        users.set(userId, user);

        return new Map(users);
    });
};

const openCloseMicUser = (userId: string) => {
    usersStateFn((users) => {
        const user = users.get(userId);
        if (!user) return users;

        const { micStatus } = user;
        user.micStatus = micStatus === 'off' ? 'on' : 'off';
        users.set(userId, user);

        return new Map(users);
    });
};

export { setUsersStateFn, addUserState, removeUserState, openCloseMicUser, addAudioTrack };
