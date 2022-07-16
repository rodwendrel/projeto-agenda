'use strict';

const mongoose = require('../database');

const UserSchema = new mongoose.Schema({

    user: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
        select: false,
        trim: true, //remove espaços a frente e atrás da String
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;