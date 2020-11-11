const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
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
        unique: true,
        lowercase: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Error: Invalid email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 5) {
                throw new Error("Error: Password should include more than 5 characters");
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});


userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};


// Method for User Instance
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'myprivatekey');
    user.tokens = user.tokens.concat({ token: token });
    await user.save();
    return token;
};


// Method for User Collection
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error('Unable to login');
    };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        throw new Error('Unable to login');
    };
    return user;
};


// Hash password => Before Saving
userSchema.pre('save', async function (next) {
    const user = this;
    
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    };

    next();
});


const User = mongoose.model('Users', userSchema);


module.exports = User;