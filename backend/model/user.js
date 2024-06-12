const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/reactImageUpload");

const userSchema = mongoose.Schema({
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
