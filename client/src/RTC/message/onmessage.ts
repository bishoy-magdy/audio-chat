import { openCloseMicUser } from '../../utils/userState';

const onmessage = (userId: string, { data }: MessageEvent) => {
    if (data === 'openCloseMic') {
        openCloseMicUser(userId);
    }
};
export default onmessage;
