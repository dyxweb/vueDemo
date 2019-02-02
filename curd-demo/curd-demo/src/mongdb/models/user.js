var mongoose = require('mongoose');
var UserSchema = require('../schemas/user');
var UserBox = mongoose.model('UserBox', UserSchema);

module.exports = UserBox;