import type { Collection, Document, InsertOneResult } from 'mongodb';
import { createOrUpdateCollection } from '../../db';

const logCollectionName = 'logs';
let logModel: Collection;

const createOrUpdateLogModel = async () => {
    logModel = await createOrUpdateCollection({
        collectionName: logCollectionName
    });
};

const getLogModel = () => {
    if (!logModel) {
        throw new Error('Model Not Found');
    }
    return logModel;
};

const addLog = async (logEntity: any): Promise<InsertOneResult<Document>> => {
    const logModel = getLogModel();
    const result = await logModel.insertOne(logEntity);
    return result;
};

export { createOrUpdateLogModel, addLog };
