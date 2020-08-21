const fs = require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');


//Solo el usuario logueado puede sumar prod al carrito
//Cuando el usuario agrega un prod al carrito debo mandar el usuario_id, producto_id, cantidad y precio
//Esa info la guardamos en la bd con un save
//Validar que vengan todos esos datos y que se puedan guardar correctamente y sino mostrar error
//Si todo sale bien debo mostrar el carrito al usuario y ir a la bd y traerme el carrito que tiene el usuario_id
let carritoController = {
  carrito: async (req, res) => {
    res.locals.title = "Carrito de Compras";
    user = req.session.usuario;
    db.carritos.findByPk(req.params.usuario_id);
    res.render('carrito', { productos: req.session.productoCarrito, user: req.session.usuario })
    /*let sumaTotal = 0;
    req.session.productoCarrito = [];
    if (req.session.productoCarrito) {
      for (let i = 0; i < req.session.productoCarrito.length; i++) {
        sumaTotal = sumaTotal + req.session.productoCarrito[i].precio
      }
    }
    console.log(sumaTotal)
    res.render('carrito', { productos: req.session.productoCarrito, user: req.session.usuarioLogueado, sumaTotal: sumaTotal });
    /*user = req.session.user;
    //res.render('carrito');
    /*db.productos.findByPk(req.params.id)
      .then(function (producto) {

        res.render('carrito', { producto: producto, user: req.session.usuario });

      })
      .catch(function (e) {
        console.log(e)
      });*/
    /*db.carritos.findAll({

      where: {
        usuario_id: user.usuario_id
      },
      include: ['productos', 'usuarios']

      })
      .then(function (userCart) {
                 console.log(userCart)
        return res.render('carrito', { userCart })
      })
      .catch(error => console.log(error));*/
  },
  carritoAdd: async (req, res) => {
    res.locals.title = "Carrito de Compras";
    db.productos.findByPk(req.body.producto_id)
      .then(function (producto) {
        let productoSeleccionado = {
          usuario_id: req.body.usuario_id,
          producto_id: req.body.producto_id,
          cantidad: req.body.cantidad,
          precio: req.body.precio
        }
  

    console.log(productoSeleccionado);
    console.log(producto);



    if (req.session.productoCarrito == undefined) {
      req.session.productoCarrito = []
      req.session.productoCarrito.push(productoSeleccionado)
    } else {
      req.session.productoCarrito.push(productoSeleccionado)
    }

    let sumaTotal = 0;
    for (let i = 0; i < req.session.productoCarrito.length; i++) {
      sumaTotal = sumaTotal + req.session.productoCarrito[i].precio
    }

    res.render('carrito', { productos: req.session.productoCarrito, user: req.session.usuarioLogueado, sumaTotal: sumaTotal });
  })
    /*user = req.session.user

    db.Producto.findByPk(req.params.id)
      .then(function (producto) {

        let Item = {

          usuario_id: user.id,
          producto_id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio
        };

        db.carritos.create(Item)
          .then(function (Item) {

            return res.redirect('/carrito')

          })

      })
      .catch(error => console.log(error));

    res.render("login");*/
    /*let errors = validationResult(req);
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
    }*/
  }
}



module.exports = carritoController;