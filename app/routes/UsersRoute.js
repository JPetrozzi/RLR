var express = require('express');
var UserCtrl = require('../controllers/UserCtrl');
var JwtManager = require('../jwtManager');

var router = express.Router();

//GET - Return all Users in the DB
router.get('/', JwtManager.ensureAuthenticated, UserCtrl.getAll);

//GET - Return a User with specified ID
router.get('/:id', function(req, res) {
    
});

//POST - Insert a new User in the DB
router.post('/', function(req, res) {
    
});

//PUT - Update a register already exists
router.put('/:id', function(req, res) {
    
});

//DELETE - Delete a User with specified ID
router.delete('/:id', function(req, res) {
    
});

module.exports = router;