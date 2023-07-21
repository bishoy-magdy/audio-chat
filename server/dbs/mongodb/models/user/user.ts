import type { Collection, Document, InsertOneResult, WithId } from 'mongodb';
import userSchema from './user.schema';
import type User from '../../../../models/user';
import { createOrUpdateCollection } from '../../db';

const userCollectionName = 'user';
const userCollectionSchema = userSchema;
let userModel: Collection;

const createOrUpdateUserModel = async () => {
    userModel = await createOrUpdateCollection({
        collectionName: userCollectionName,
        collectionSchema: userCollectionSchema
    });

    await userModel.createIndex({ email: 1 }, { unique: true });
};

const getUserModel = () => {
    if (!userModel) {
        throw new Error('Model Not Found');
    }
    return userModel;
};

const createUser = async (user: User): Promise<InsertOneResult<Document>> => {
    const userModel = getUserModel();
    const result = await userModel.insertOne(user);
    return result;
};

const findUserByEmail = async (email: string): Promise<WithId<User> | null> => {
    const userModel = getUserModel();
    const result = await userModel.findOne({ email }) as WithId<User> | null;
    return result;
};

const updateImgProfiel = async (email: string, imgSrc: string): Promise<boolean> => {
    const userModel = getUserModel();
    const result = await userModel.updateOne({ email }, { $set: { profileImg: imgSrc } });
    return result.acknowledged;
};

export { createOrUpdateUserModel, createUser, findUserByEmail, updateImgProfiel };
