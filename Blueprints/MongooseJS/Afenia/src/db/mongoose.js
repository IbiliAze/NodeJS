const mongoose = require('mongoose');

const dbName = 'config-manager2';
const connectionURL = `mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (error, client) => {
    if (error) {
        return console.log(`Connection error`);
    } 
    console.log(`Connection successful`);
});



