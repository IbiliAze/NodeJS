require('../src/db/mongoose');
const { count } = require('../src/models/user');
const User = require('../src/models/user');


// From this
User.findByIdAndUpdate('5f9ecf081b0f563818698866', {fullName: "Jolly"}).then((result) => {
    console.log(result);
    return User.countDocuments({fullName: "Jolly"});
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
});


// To this
const doWork = async (id, fullName) => {
    const update = await User.findByIdAndUpdate(id, {fullName: fullName});
    const count = await User.countDocuments({fullName: fullName});
    const get = await User.findById(id);
    return get
};

doWork('5f9db797ca87d82268b43ba2', 'Polly').then((result) => {
    console.log(`Cound is: ${result}`);
}).catch((error) => {
    console.log(error);
});