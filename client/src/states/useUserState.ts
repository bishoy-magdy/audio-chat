import { SetStateAction, useEffect, useState, Dispatch } from 'react';
import UserState from '../models/userState';
import User from '../components/User';

const useUsersState = (): [JSX.Element[], Dispatch<SetStateAction<Map<string, UserState>>>] => {
    const [usersElement, setUsersElement] = useState<JSX.Element[]>([]);
    const [usersState, setUsersState] = useState<Map<string, UserState>>(new Map());

    useEffect(() => {
        setUsersElement(() => {
            const updatedUsers: JSX.Element[] = [];

            usersState.forEach((userState, key) => {
                const { name, micStatus, profileImg, audioTrack } = userState;
                const userElement = User({ id: key, name, micStatus, src: profileImg });
                updatedUsers.push(userElement);

                const userAudio = document.getElementById(key) as HTMLAudioElement;
                if (userAudio) {
                    userAudio.srcObject = audioTrack as MediaStream;
                    userAudio.autoplay = true;
                    userAudio.hidden = true;
                    userAudio.id = key;
                } else {
                    const audio = document.createElement('audio') as HTMLAudioElement;
                    audio.srcObject = audioTrack as MediaStream;
                    audio.autoplay = true;
                    audio.hidden = true;
                    audio.id = key;

                    const container = document.getElementById('allAudio');
                    container?.appendChild(audio);
                }
            });

            return updatedUsers;
        });
    }, [usersState]);

    return [usersElement, setUsersState];
};

export default useUsersState;
