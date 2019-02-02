var express = require('express');
var router = express.Router();

// 表单提交应该使用post，但是由于技术有限先使用get
router.get('/', function(req, res, next) {
    const name=req.query.name
    const password=req.query.password
    if(name==="douyaxing" && password==="douyaxing"){
        res.json({"ok":true})
    }else{
        res.json({"ok":false})
    }
});

module.exports = router;
