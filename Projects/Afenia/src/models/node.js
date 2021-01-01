const mongoose = require('mongoose');
const validator = require('validator');
const Config = require('./config');


const nodeSchema = new mongoose.Schema({
    nodeName: {
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if (value.length < 2) {
                console.error(`Node Name is too short`);
                throw new Error(`Node Name is too short`);
            }
        }
    },
    host: {
        type: String,
        required: true,
    },
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
    },
    platform: {
        type: String,
        required: true,
        lowercase: true,
        enum: [
            'ios'
        ]
    },
    nodeGroups: [{
        type: String,
        lowercase: true,
        default: 'global'
    }],
    orgId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Org'
    },
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Site'
    },
    description: {
        type: String,
        required: false,
        lowercase: true,
        default: "node description",
    },
    layer: {
        type: String,
        required: false,
        lowercase: true,
        default: 'access'
    }
}, {
    timestamps: true
});


nodeSchema.methods.toJSON = function () {
    const node = this;
    const nodeObject = node.toObject();
   
    delete nodeObject.tokens;
    delete nodeObject.__v;
    delete nodeObject.orgId.password;
    delete nodeObject.orgId.tokens;
    delete nodeObject.orgId.__v;

    return nodeObject;
};


nodeSchema.pre('remove', async function(next) {
    const node = this;
    await Config.deleteMany({ orgId: node.orgId, nodeId: node._id });

    next();
});


const Node = mongoose.model('Node', nodeSchema);


module.exports = Node;