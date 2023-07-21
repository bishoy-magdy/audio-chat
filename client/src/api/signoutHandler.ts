const signoutHandler = async () => {
    const signoutUrl = '/api/signout';
    return fetch(signoutUrl);
};

export default signoutHandler;
