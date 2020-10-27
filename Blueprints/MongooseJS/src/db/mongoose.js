const mongoose = require('mongoose');
const validator = require('validator');

const dbName = 'task-manager-api';
const connectionURL = `mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
}, (error, client) => {
    if (error) {
        return console.log(`Connection error`);
    } 
    console.log(`Connection successful`);
});


const Sites = mongoose.model("Sites", {
    siteName: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Error: Site Name is too short")
            }
        }
    },
    orgName: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Error: Organisation Name is too short")
            }
        }
    },
    brand: {
        type: String,
        required: false,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Error: Brand Name is too short")
            }
        }
    },
    model: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: false,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Error: Invalid email");
            }
        }
    },
    isInUse: {
        type: Boolean,
        required: false,
        default: true
    }
});

const site1 = new Sites({
    siteName: 'manchester',
    orgName: 'afenia',
    brand: 'juniper',
    model: 'junos',
    email: 'Fua Fuark@gmail.com'
});

site1.save().then((result) => {
    console.log(`Succesfully added ${site1}`);
}).catch((error) => {
    console.log(error);
});