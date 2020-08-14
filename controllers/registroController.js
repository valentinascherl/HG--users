const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require("../database/models");
const { check, validationResult, body } = require("express-validator");


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let registroController = {
    registro: function (req, res, next) {
        res.locals.title = "registro";
        res.render('registro', { productosAMostrar: products });
    },

    crear: (req, res, next) => {
        res.locals.title = "registro";
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            if (req.body.contrasena == req.body.validation) {

                delete req.body.validation;
            }

            // creacion de usuario y almacenado en database
            db.usuarios.findOne({
                where: {
                    email: req.body.email
                }
            }).then((usuario) => {

                if (usuario != undefined) {
                    return res.render("registro", { errors: [{ msg: 'El email con el que intenta registrarse pertenece a un/a usuario/a ya registrado/a' }], usuarioLogueado: undefined });
                } else {
                    db.usuarios.create({
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                        avatar: req.body.avatar,
                        domicilio: req.body.domicilio,
                        ciudad: req.body.ciudad,
                        departamento: req.body.departamento,
                        codigoPostal: req.body.cp,
                    }).then(user => {
                        req.session.usuarioLogueado = user;
                        return res.redirect('/');
                    });
                }
            });


        } else {

            return res.render("registro", { errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado });
        }
    },
}



module.exports = registroController;