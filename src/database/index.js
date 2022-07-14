const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projeto-agenda');
mongoose.Promise = global.Promise;

module.exports = mongoose;
