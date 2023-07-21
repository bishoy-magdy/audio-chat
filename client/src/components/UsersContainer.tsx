import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import { UsersContainerProps } from './props/usersContainerProps';

const UsersContainer = (props: { children: JSX.Element[] }) => {
    const { children } = props;

    return (
        <Container {...UsersContainerProps}>
            <Heading as="h5" size="sm">
                Participants
            </Heading>
            <Divider />

            <Container overflow={'auto'} h={'70vh'}>
                <SimpleGrid columns={2} spacing={'10'}>
                    {...children}
                </SimpleGrid>
            </Container>
        </Container>
    );
};

export default UsersContainer;
