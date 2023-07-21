
const userSchema = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'email', 'password'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                name: {
                    bsonType: 'string'
                },
                email: {
                    bsonType: 'string'
                },
                profileImg: {
                    bsonType: 'string'
                },
                password: {
                    bsonType: 'string'
                }
            },
            additionalProperties: false
        }
    }
};

export default userSchema;
