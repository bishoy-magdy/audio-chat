import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import { UsersContainerProps } from './props/usersContainerProps';
import { Link } from 'react-router-dom';
import signinHandler from '../api/signinHandler';

const Signin = () => {
    return (
        <Container {...UsersContainerProps}>
            <form onSubmit={signinHandler}>
                <VStack spacing={'5'}>
                    <Heading as="h2">Signin</Heading>

                    <Box w="75%">
                        <FormLabel>Email</FormLabel>
                        <Input name="email" isRequired />
                    </Box>

                    <Box w="75%">
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" isRequired />
                    </Box>

                    <Button mt={4} colorScheme="teal" type="submit">
                        Submit
                    </Button>
                </VStack>
            </form>

            <Link to="/signup" style={{ float: 'right', fontWeight: 'bold' }}>
                Create Account
            </Link>
        </Container>
    );
};

export default Signin;
