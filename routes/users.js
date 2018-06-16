var express = require('express');
var router = express.Router();

const userController = require("../controller/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', (req, res, next)=>{
  userController.add(req, res, next);
});

module.exports = router;
