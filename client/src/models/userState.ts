interface UserState {
    name: string;
    profileImg: string;
    audioTrack?: MediaStream;
    micStatus: 'on' | 'off';
}

export default UserState;
