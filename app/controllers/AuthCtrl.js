var User = require('../models/User');
var JwtManager = require('../jwtManager');

exports.emailSignup = function(req, res) {
    console.log("request: " + req.body.email + ' - ' + req.body.password + ' - ' + req.body.name + ' - ' + req.body.lastname);

    User.findOne({email: req.body.newUser.email.toLowerCase()}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error ocurred in db search: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: "Email in use!"
                });
            } else {
                var userModel = new User();

                userModel.apellido = req.body.lastname;
                userModel.nombre = req.body.name;
                userModel.email = req.body.email.toLowerCase();
                userModel.password = req.body.password;

                userModel.save(function(err) {
                    if (err) {
                        res.json({
                            type: false,
                            data: "Error ocurred in user register: " + err
                        });
                    } else {
                        res.json({
                            type: true,
                            data: userModel,
                            token: JwtManager.createToken(userModel)
                        });
                    }
                });
            }
        }
    });
};

exports.emailLogin = function(req, res) {
    User.findOne({email: req.body.email.toLowerCase(), password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error ocurred in db search: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: true,
                    data: user,
                    token: JwtManager.createToken(user)
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });
            }
        }
    });
};
