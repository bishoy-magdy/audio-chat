import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react';

const CardMessage = (props: { userName: string; message: string }) => {
    const { userName, message } = props;
    return (
        <Card size={'sm'}>
            <CardHeader>
                <Heading margin={'0'} size="sm">
                    {userName}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text size="sm">{message}</Text>
            </CardBody>
        </Card>
    );
};

export default CardMessage;
