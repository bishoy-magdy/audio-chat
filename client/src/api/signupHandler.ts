import { FormEvent } from 'react';

const signupHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const signupUrl = '/api/signup';

    const response = await fetch(signupUrl, {
        method: 'post',
        body: formData
    });

    if (response.ok) {
        location.replace('/home');
    } else {
        console.log('error');
    }
};

export default signupHandler;
