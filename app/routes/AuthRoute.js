var express = require('express');
var AutCtrl = require('../controllers/AuthCtrl');

var router = express.Router();

//POST - Register new user
router.post('/signup', AutCtrl.emailSignup);

//POST - Authenticate a user
router.post('/login', AutCtrl.emailLogin);

module.exports = router;