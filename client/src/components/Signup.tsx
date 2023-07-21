import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { UsersContainerProps } from './props/usersContainerProps';
import { useState } from 'react';
import signupHandler from '../api/signupHandler';

const Signup = () => {
    const [password, setPassword] = useState('');
    const [confinrmedPassword, setConfinrmedPassword] = useState('');

    return (
        <Container {...UsersContainerProps}>
            <form onSubmit={signupHandler}>
                <VStack spacing={'2.5'}>
                    <Heading as="h2">Signup</Heading>
                    <Box w="75%">
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input name="name" isRequired />
                        </FormControl>
                    </Box>

                    <Box w="75%">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" name="email" isRequired />
                    </Box>

                    <Box w="75%">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            isRequired
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </Box>

                    <Box w="75%">
                        <FormControl isInvalid={password !== confinrmedPassword}>
                            <FormLabel>Conform password</FormLabel>
                            <Input
                                type="password"
                                isRequired
                                onChange={({ target }) => setConfinrmedPassword(target.value)}
                            />
                            {password !== confinrmedPassword ? (
                                <FormErrorMessage>
                                    Those passwords did not match. Try again
                                </FormErrorMessage>
                            ) : null}
                        </FormControl>
                    </Box>

                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                        isDisabled={!(password === confinrmedPassword)}>
                        Submit
                    </Button>
                </VStack>
            </form>

            <Link to="/signin" style={{ float: 'right', fontWeight: 'bold' }}>
                Signin
            </Link>
        </Container>
    );
};

export default Signup;
