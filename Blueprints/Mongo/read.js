const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(`Connection error`);
    } 
    
    console.log(`Connection successful`);

    const db = client.db(databaseName);


    // db.collection('sites').findOne({ model: 'c9300-48p' }, (error, result) => {
    //     if (error) {
    //         return console.log("Error getting data");
    //     }
    //     console.log(result);
    // });


    // db.collection('sites').findOne({ _id: new ObjectID('5f970cdb371bd93ed041a4ef') }, (error, result) => {
    //     if (error) {
    //         return console.log("Error getting data");
    //     }
    //     console.log(result);
    // });


    db.collection('sites').find({ model: 'c9300-48p' }).toArray((error, result) => {
        if (error) {
            return console.log("Error getting data");
        }
        console.log(result);
    });


    db.collection('sites').find({ model: 'c9300-48p' }).count((error, result) => {
        if (error) {
            return console.log("Error getting data");
        }
        console.log(result);
    });
});
