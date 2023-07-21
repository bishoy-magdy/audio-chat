interface ClientToServerEvents {
    newUser: (e: { data: { roomId: string, userId: string } }) => void
    join: (e: { data: { roomId: string } }) => void
    newMessage: (e: { data: { message: string, roomId: string } }) => void
    knowMe: (e: { data: { to: string, userId: string } }) => void
    createOffer: (e: { data: { to: string, userId: string } }) => void
    createAnswer: (e: { data: { to: string, userId: string, sdp } }) => void
    createIceExchange: (e: { data: { to: string, userId: string, ice } }) => void
    createSDP: (e: { data: { to: string, userId: string, sdp } }) => void
    roomLogout: (e: { data: { roomId: string, userId: string } }) => void

  };

export default ClientToServerEvents;
