const fs = require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');

let carritoController = {
  carrito: function (req, res) {
    res.locals.title = "Carrito de Compras";
    //res.render('carrito');
    db.productos.findByPk(req.params.id)
      .then(function (producto) {

        res.render('carrito', { producto: producto, user: req.session.usuario });

      })
      .catch(function (e) {
        console.log(e)
      });
  },
  carritoAdd: function(req, res){
      let errors = validationResult(req);
      if (errors.isEmpty()) {
        let items = db.producto_carrito.findAll({
          where: {
            usuario_id: req.session.userLogged.id
          }
        });
        if (items.length == 0) {
          db.producto_carrito.create({
            usuario_id: req.session.userLogged.id,
            producto_id: req.params.id,
            //quantity: req.body.quantity
          });
          res.redirect("/carrito");
        }
      }
    }
}



module.exports = carritoController;