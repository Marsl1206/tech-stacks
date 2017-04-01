/*
* @Author: kampfen
* @Date:   2017-04-01 21:10:46
* @Last Modified by:   kampfen
* @Last Modified time: 2017-04-01 21:38:51
*/

var express = require("express");
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'hello' });
});

module.exports = router;