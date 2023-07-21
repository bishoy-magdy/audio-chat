let clientId: string;

const getClientId = () => {
    if (clientId) {
        clientId = crypto.randomUUID();
    }
    return clientId;
};

export default getClientId;
