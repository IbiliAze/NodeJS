const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(`Connection error`);
    } 
    
    console.log(`Connection successful`);

    const db = client.db(databaseName);

    // const updatePromise = db.collection('sites').updateOne({ 
    //     _id: new ObjectID("5f970bb9e2025b41ec8fb991") 
    // },
    // {
    //     $set: {
    //         model: "c2900-24c"
    //     }
    // });

    // updatePromise.then((result) => {
    //     console.log(result);
    // }). catch((error) => {
    //     console.log(error);
    // });

    db.collection('sites').updateOne({                      // same as above but more common
        _id: new ObjectID("5f970cdb371bd93ed041a4ef") 
    },
    {
        $set: {
            model: "c2900-24c"
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});
