import { FormEvent } from 'react';

const signinHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const signinUrl = '/api/signin';

    const response = await fetch(signinUrl, {
        method: 'post',
        body: formData
    });

    if (response.ok) {
        location.replace('/home');
    } else {
        console.log('error');
    }
};

export default signinHandler;
