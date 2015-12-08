var User = require('../models/User');

//Obtiene todos los usuarios de la base de datos
exports.getAll = function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err);
        
        res.json(users);
    });
};

//Obtiene un usuario especifico de la base de datos segun su id
exports.getById = function(req, res) {
    
};

//Inserta un nuevo usuario en la base de datos
exports.insert = function(req, res) {
    
};

//Sobre escribe un usuario de la base de datos
exports.update = function(req, res) {
    
};

//Elimina un usuario especifico de la base de datos segun su id
exports.delete = function(req, res) {
    
};