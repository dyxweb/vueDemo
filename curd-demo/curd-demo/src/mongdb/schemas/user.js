var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: {
		type: String, 
		required: true
	},
	phone: {
		type: String, 
		required: true
    },
  createTime: {
		type: String, 
		required: true
	},
	fee: {
		type: String, 
		required: true
    },
    detail: {
        type: Array,
        required: false
    }
}, { collection: 'user' });

module.exports = User;