var express = require('express');
var router = express.Router();
var User = require('../curd-demo/src/mongdb/models/user')

// 删除用户
router.get('/', (req, res, next) => {
    let deleteUser = req.query
    console.log(req)
	User.remove({_id: deleteUser.id}, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
})

module.exports = router;