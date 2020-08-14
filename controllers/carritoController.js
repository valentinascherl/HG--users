const fs=require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');

let carritoController = {
    carrito: function(req, res, next) {
      res.locals.title= "Carrito de Compras";
    /*res.render('carrito');*/
    db.productos.findByPk(req.params.id)
    .then(function(producto){

        res.render('carrito', {producto:producto, user: req.session.usuario});

    })
    .catch(function(e){
        console.log(e)
    });
  }
}



module.exports= carritoController;