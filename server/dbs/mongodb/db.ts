import type { Collection, Db, Document } from 'mongodb';
import { MongoClient } from 'mongodb';
import getDBModels from './models/getDBModels';

let dbClient: MongoClient;
let db: Db;

const initMongo = async (url: string, dbName: string) => {
    dbClient = await new MongoClient(url).connect();
    db = dbClient.db(dbName);

    const dbModels = getDBModels();
    await Promise.all(dbModels.map((model) => model()));
};

const getDB = () => {
    if (!db) {
        throw new Error('database not found');
    }
    return db;
};

const collectionIsExists = async (collectionName: string): Promise<boolean> => {
    const db = getDB();
    const listCollections = await db.listCollections({ name: collectionName }).toArray();
    return !!listCollections.length;
};

const createOrUpdateCollection = async (collection: any): Promise<Collection<Document>> => {
    const { collectionName, collectionSchema } = collection;
    const db = getDB();
    const isExists = await collectionIsExists(collectionName);

    if (isExists) {
        // update schema
        await db.command({ collMod: collectionName, ...collectionSchema });
        return db.collection(collectionName);
    }

    const newCollection = await db.createCollection(collectionName, collectionSchema);

    return newCollection;
};

export {
    initMongo,
    getDB,
    collectionIsExists,
    createOrUpdateCollection
};
