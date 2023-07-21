interface ServerToClientEvents {
    newUser: (e: { data: { userId: string, userInfo: { name: string, profileImg: string } } }) => void
    newMessage: (e: { data: { userName: string, message: string } }) => void
    knowMe: (e: { data: { userId: string, userInfo: { name: string, profileImg: string } } }) => void
    offer: (e: { data: { userId: string } }) => void
    answer: (e: { data: { userId: string, sdp } }) => void
    iceExchange: (e: { data: { userId: string, ice } }) => void
    sdp: (e: { data: { userId: string, sdp } }) => void
    removeUser: (e: { data: { userId: string } }) => void
    error: (e: { data: { message: string } }) => void
  };

export default ServerToClientEvents;
