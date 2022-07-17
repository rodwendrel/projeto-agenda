"use strict";

const mongoose = require("../database");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  secondName: {
    type: String,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
