const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('Users', {
    fullName: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Error: Name is too short");
            }
        }
    },
    siteName: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Error: Site Name is too short");
            }
        }
    },
    orgName: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Error: Organization Name is too short");
            }
        }
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: false,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Error: Invalid email");
            }
        }
    }
});

module.exports = User;