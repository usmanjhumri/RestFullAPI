const mongoose = require("mongoose");



const UsersignupScheme = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },

});


module.exports = mongoose.model('singupUser', UsersignupScheme)
