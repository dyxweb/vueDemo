var express = require('express');
var router = express.Router();
var User = require('../curd-demo/src/mongdb/models/user')

// 添加用户
router.get('/', (req, res, next) => {
	let newUser = req.query
	User.create(newUser, (err) => {
		if (err) {
			console.log(err);
		}else {
			User.find({}, (err, userList) => {
				if (err) {
					console.log(err);
				}else {
					res.json(userList);
				}
			});
		}
	})
})



module.exports = router;