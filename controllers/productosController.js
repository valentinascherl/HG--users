const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');
const { check, validationResult, body } = require("express-validator");

const toThousand = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price, discount) => toThousand(Math.round(price * (1 - (discount / 100))));


let productosController = {
    productos: async (req, res) => {        //GET - Muestra todos los productos
        res.locals.title = "Todos los productos";
        try {
            const products = await db.productos.findAll();
            res.render("productos", { products, formatPrice, toThousand, user: req.session.usuario });
        } catch (error) {
            res.render("error", { message: error });
        }
    },
    cardio: async (req, res) => {
        res.locals.title = "Cardio";
        try {
            const products = await db.productos.findAll({
                where: {
                    seccion_id: "1"
                }
            });
            res.render("cardio", { products, formatPrice, toThousand, user: req.session.usuario });
        } catch (error) {
            res.render("error", { message: error });
        }
    },
    musculacion: async (req, res) => {
        res.locals.title = "Musculacion";
        try {
            const products = await db.productos.findAll({
                where: {
                    seccion_id: "2"
                }
            });
            res.render("musculacion", { products, formatPrice, toThousand, user: req.session.usuario });
        } catch (error) {
            res.render("error", { message: error });
        }
    },
    accesorios: async (req, res) => {
        res.locals.title = "Accesorios";
        try {
            const products = await db.productos.findAll({
                where: {
                    seccion_id: "3"
                }
            });
            res.render("accesorios", { products, formatPrice, toThousand, user: req.session.usuario });
        } catch (error) {
            res.render("error", { message: error });
        }
    },
    create: function (req, res) {
        res.locals.title = "Creacion de productos";
        res.render('formToCreate', { user: req.session.usuario });

    },
    store: (req, res) => {
        res.locals.title = "Creacion de productos";
        let errors = validationResult(req);

        if (errors.isEmpty()) {
        db.productos.create({
            producto_id: req.body.producto_id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: parseFloat(req.body.precio),
            marca: req.body.marca,
            modelo: req.body.modelo,
            tamano: req.body.tamano,
            seccion_id: req.body.seccion_id,
            descuento: parseFloat(req.body.descuento),
            categoria: parseInt(req.body.categoria)
        })
        return res.redirect("/productos");
       }else{
        return res.render("formToCreate", { errors: errors.errors, user: req.session.usuario});
       }
    },


    edit: async (req, res) => {
            res.locals.title = "Editar";
            db.productos.findByPk(req.params.id)

			.then(function (producto) {
				console.log(producto)

				products = producto;

				console.log(products)

				res.render('formToEdit', { products });

			})

			.catch(error => console.log(error));
            /*try {
                const products = await db.productos.findByPk(req.params.id);
                res.render("formToEdit", { products });
            } catch (error) {
                res.render("error", { error });
            }
        }*/

    },
    update:  (req, res) => {

        res.locals.title = "Editar";
        db.productos.update({
            producto_id: req.body.producto_id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: parseFloat(req.body.precio),
            marca: req.body.marca,
            modelo: req.body.modelo,
            tamano: req.body.tamano,
            seccion_id: req.body.seccion_id,
            descuento: parseFloat(req.body.descuento),
            categoria: parseInt(req.body.categoria)


		}, {

			where:
				{ producto_id: req.params.id }
		})



		res.redirect('/productos');
    },

    delete: (req, res) => {
        res.locals.title = "Eliminar";
        db.productos.destroy({
			where: {
				producto_id: req.params.id
			}
		})

		res.redirect('/productos/');
        /*db.productos.destroy({
            where: {
                producto_id: req.params.id
            }
        })
            .then((product) => {
                let mensaje = 'El producto se eleminó correctamente.';
                res.render("/", { mensaje })
            }).catch((error) => {
                res.render("/", { error })
            });*/
    },
    admin: async (req, res) => {        //GET - Muestra todos los productos
        res.locals.title = "Todos los productos para editar";
        try {
            const products = await db.productos.findAll();

            res.render("admin", { products, formatPrice, toThousand, user: req.session.usuario });
        } catch (error) {
            res.render("error", { message: error });
        }
    },
    detail: async (req, res) => {
        db.productos.findByPk(req.params.id)
            .then(function (product) {
                res.render('detalle', { product, formatPrice, toThousand, user: req.session.usuario });
            })
            .catch(function (e) {
                console.log(e)
                res.render("error", { error: e })
            });
    },
}



module.exports = productosController;


//crear es post  es /productos
//elimnar es por delete  /productos/:id
//modificar es put  /productos/:id
//detalle es get //productos/:id
