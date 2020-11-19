const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const configSchema = new mongoose.Schema({
    credentials: {
        sshUsername: {
            type: String,
            required: true
        },
        sshPassword: {
            type: String,
            required: true
        },
        sshPort: {
            type: Number,
            required: false,
            default: 22,
            validate(value) {
                if (value < 21 || value > 35000 ) {
                    console.error('Invalid SSH Port');
                    throw new Error('SSH Port out of range (22-35000)');
                }
            }
        }
    },
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Site'
    },
    orgId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Org'
    },
    config: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


configSchema.methods.toJSON = function () {
    const config = this
    const configObject = config.toObject();

    delete configObject.__v;

    return configObject;
};  


configSchema.pre('save', async function(next) {
    const config = this;

    if (config.isModified('credentials')) { 
        config['credentials']['sshPassword'] = await bcrypt.hash(config['credentials']['sshPassword'], 8);
    };

    next();
});


const Config = mongoose.model('Config', configSchema);


module.exports = Config;