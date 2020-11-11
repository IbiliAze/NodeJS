const jwt = require('jsonwebtoken');

const myFunc = async () => {
    const token = jwt.sign({ _id: '12345' }, 'mycustomprivatekey', { expiresIn: '365 days' });
    console.log(token)


    console.log(jwt.verify(token, 'mycustomprivatekey'))
};

myFunc()