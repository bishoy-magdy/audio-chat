interface RTCUser extends RTCPeerConnection {
    userId?: string;
    userInfo?: {
        name: string;
        profileImg: string;
    };
    audioChatChannel: RTCDataChannel;
}
export default RTCUser;
