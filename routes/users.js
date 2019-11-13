var express = require('express');
var User = require('../models/user');

var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  var where = {
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };

  User.find(where, function(err, users) {
    if (err) {
      return res.json({status: false, error: err});
    }
    return res.json({status: true, users: users});
  });
});

module.exports = router;
