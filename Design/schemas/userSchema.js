var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    googleId: String,
    displayName: String
})

var userModel = mongoose.model('User', userSchema);