const mongoose = require('mongoose');

const databaseName = 'DMVPN';
const connectionURL = `mongodb://127.0.0.1:27017/${databaseName}`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (error, client) => {
    if (error) {
        return console.error(`Connection error`);
    } 
    console.log(`Connection successful`);
});

