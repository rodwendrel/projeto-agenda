const mongoose = require('../database');

const UserSchema = new mongoose.Schema({

    user: {
        type: String,
        unique: true,
        lowercase: true,
        require: true,
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        require: true,
    },

    password: {
        type: String,
        require: true,
        select: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;