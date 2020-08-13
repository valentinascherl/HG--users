const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const usuarios = require('../database/models/usuarios');



let usersController = {
  login: function (req, res, next) {
    res.locals.title = "Iniciar sesión";
    res.render('login');
  },

  loginUser: function (req, res) {
    res.locals.title = "Proceso de Iniciar sesión";
    let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = {
                email: req.body.email,
                contrasena: req.body.contrasena
            }
            console.log(user);
            db.usuarios.findOne({
                where: {
                    email: user.email
                }
            }).then((usuario) => {
                if (usuario) {
                    let check = bcrypt.compareSync(user.contrasena, usuario.contrasena)
                    console.log(check);
                    if (check == false) {
                        req.session.usuarioLogueado = usuario;
                        return res.redirect('/');
                    };
                }

                return res.render("login", { errors: [{ msg: 'Revisa que el mail y la contraseña coincidan con un usuario registrado' }], usuarioLogueado: undefined });


            }).catch((err) => console.error(err));

        } else {
            return res.render("login", { errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado });
        }
  },
  perfil: function (req, res) {
    res.locals.title = "Perfil del usuario";
    if (req.session.usuarioLogueado == undefined) {
      return res.render("login", { usuarioLogueado: undefined });
  } else {
      return res.render('perfil', { user: req.session.usuarioLogueado, usuarioLogueado: req.session.usuarioLogueado });
  }
  },
  editarPerfil:function (req, res) {
    res.locals.title = "Editar perfil del usuario";
    if (req.session.usuarioLogueado == undefined) {
      return res.render("login", { usuarioLogueado: undefined });
  } else {
      return res.render('editarPerfil', { user: req.session.usuarioLogueado, usuarioLogueado: req.session.usuarioLogueado });
  }
  },
  post_editarPerfil: function(req, res) {
    res.locals.title = "Editar perfil del usuario"; 
      let user = {
          nombre: req.body.nombre,
          email: req.body.email,
          // password: bcrypt.hashSync(req.body.password, 10),
          // avatar: req.files[0].filename,
      }

      db.usuarios.findOne({
          where: {
              email: user.email
          }
      }).then((usuarioReg) => {
          if (usuarioReg !== undefined) {
              db.usuarios.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                avatar: req.body.avatar,
                domicilio: req.body.domicilio,
                ciudad: req.body.ciudad,
                departamento: req.body.departamento,
                codigoPostal: req.body.cp,
              }, {
                  where: {
                      nombre: req.session.usuarioLogueado.nombre
                  }
              }).then((count) => { //rows updated
                  db.usuarios.findOne({
                      where: {
                          nombre: req.session.usuarioLogueado.nombre
                      }
                  }).then((usuario) => {
                      req.session.usuarioLogueado = usuario;
                      return res.render('perfil', { user: req.session.usuarioLogueado, usuarioLogueado: req.session.usuarioLogueado });

                  });
              });
          } else {
              return res.render('/', { user: req.session.usuarioLogueado, usuarioLogueado: req.session.usuarioLogueado });
          }
      })
           }
}

module.exports = usersController;