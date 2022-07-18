'use strict';

const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    user: {
        type: String,
        unique: true,
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
        trim: true, //remove espaços a frente e atrás da String
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});


const User = mongoose.model('User', UserSchema);

module.exports = User;