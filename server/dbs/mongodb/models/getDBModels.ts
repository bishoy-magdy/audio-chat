import { createOrUpdateLogModel } from './log/log';
import { createOrUpdateUserModel } from './user/user';

const getDBModels = () => {
    return [createOrUpdateUserModel, createOrUpdateLogModel];
};

export default getDBModels;
