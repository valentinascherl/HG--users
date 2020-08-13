const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');
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
        res.redirect("/productos");
        /*try {
            console.log(req.body.nombre)
            await db.productos.create({
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
            });
            res.send("exito");

        } catch (error) {
            res.render("error", {error});
        }*/
    },


    edit: async (req, res) => {
        {
            res.locals.title = "Editar";
            try {
                const products = await db.productos.findByPk(req.params.id);
                res.render("formToEdit", { products });
            } catch (error) {
                res.render("error", { error });
            }
        }

    },
    update: async (req, res) => {

        res.locals.title = "Editar";
        try {
            const products = await db.productos.update({
            },{
                where: {
                    id: req.body.id
                }
            });
            res.render("formToEdit", { products, formatPrice, toThousand, user: req.session.usuario });
        } catch (error) {
            res.render("error", { message: error });
        }
    },

    delete: (req, res) => {
        res.locals.title = "Eliminar";
        db.productos.destroy({
            where: {
                id: req.body.id
            }
        })
            .then((product) => {
                let mensaje = 'El producto se eleminó correctamente.';
                res.render("/", { mensaje })
            }).catch((error) => {
                res.render("/", { error })
            });
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
