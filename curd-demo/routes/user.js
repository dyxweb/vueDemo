var express = require('express');
var router = express.Router();
var User = require('../curd-demo/src/mongdb/models/user')

// 获取所有用户信息
router.get('/', function(req, res, next) {
  User.find({}).exec((err, userList) => {
		if (err) {
			console.log(err);
		}else {
			res.json(userList);
		}
	})
});

module.exports = router;

