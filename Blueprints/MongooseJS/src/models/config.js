const mongoose = require('mongoose');
const validator = require('validator');

const Config = mongoose.model("Config", {
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
                throw new Error("Error: Organization Name is too short")
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
    isInUse: {
        type: Boolean,
        required: false,
        default: true
    }
});

module.exports = Config;