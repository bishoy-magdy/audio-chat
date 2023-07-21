import { type RedisClientType, createClient } from 'redis';
import RedisStore from 'connect-redis';

let redisClient: RedisClientType<any>;

const initRedis = async (reidsUrl: string): Promise<void> => {
    redisClient = createClient({ url: reidsUrl });
    await redisClient.connect();
};

const redisSessionStore = (): RedisStore => {
    if (!redisClient) {
        throw new Error('redis client not found');
    }

    return new RedisStore({
        client: redisClient,
        prefix: 'audioChat:'
    });
};

const addRoom = async (roomId: string): Promise<boolean> => {
    const room = `room:${roomId}`;
    const fiveHours = 5 * 60 * 60;
    const ack = await redisClient.set(room, 'true', { EX: fiveHours, NX: true });
    return ack === 'OK';
};

const roomIsExists = async (roomId: string): Promise<boolean> => {
    const room = `room:${roomId}`;
    const ack = await redisClient.get(room);
    return ack === 'true';
};

export { initRedis, redisSessionStore, addRoom, roomIsExists };
