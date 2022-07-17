const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/projeto-agenda", {
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
