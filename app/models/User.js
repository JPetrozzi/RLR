var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    apellido: String,
    nombre: String,
    email: String,
    usuario: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);