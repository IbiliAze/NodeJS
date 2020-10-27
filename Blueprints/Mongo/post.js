const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(`Connection error`);
    } 
    
    console.log(`Connection successful`);

    const db = client.db(databaseName);
    
    
    db.collection('sites').insertMany([
        {
            siteName: 'London C1',
            orgName: 'Afenia',
            brand: 'Cisco',
            model: 'c9300-48p'
        },
        {
            siteName: 'Glasgow C1',
            orgName: 'Afenia',
            brand: 'Cisco',
            model: 'c9300-24t'
        }

    ], (error, result) => {
        if (error){
            return console.log("Error when inserting data")
        }
        console.log(result.ops);
    });
});