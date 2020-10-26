const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(`Connection error`);
    } 
    
    console.log(`Connection successful`);

    const db = client.db(databaseName);

    
    db.collection('sites').deleteOne({
        _id: new ObjectID("5f970cdb371bd93ed041a4ef")
    }, (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log(result);
    });
});
