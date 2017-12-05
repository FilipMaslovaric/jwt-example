const jwt = require('jsonwebtoken');

const secretKey = "sdfkjhsdfkjhsdfkjh";

// Create a JSON Web Token
const token = jwt.sign({ dog: 'Edison' }, secretKey);

// Verify the token
try {
    const result = jwt.verify(token, secretKey)
    console.log('All good', result)
} catch (err) {
    console.log('No good')
}