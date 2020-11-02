require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndRemove('5f9db86cdcad233f08e46a97').then((result) => {
    console.log(`Removed user successfully: ${result}`);
    return User.countDocuments();
}).then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
});