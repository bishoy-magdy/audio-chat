interface ClientToServerEvents {
    newUser: (e: {
        data: { userId: string; userInfo: { name: string; profileImg: string } };
    }) => void;
    newMessage: (e: { data: { userName: string; message: string } }) => void;
    knowMe: (e: {
        data: { userId: string; userInfo: { name: string; profileImg: string } };
    }) => void;
    offer: (e: { data: { userId: string } }) => void;
    answer: (e: { data: { userId: string; sdp: RTCSessionDescription } }) => void;
    iceExchange: (e: { data: { userId: string; ice: RTCIceCandidate } }) => void;
    sdp: (e: { data: { userId: string; sdp: RTCSessionDescription } }) => void;
    removeUser: (e: { data: { userId: string } }) => void;
    error: (e: { data: { message: string } }) => void;
}

export default ClientToServerEvents;
