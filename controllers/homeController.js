const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');
const toThousand = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price, discount) => toThousand(Math.round(price * (1 - (discount / 100))));



let homeController = {
    home:async (req, res) => {        //GET - Muestra todos los productos
      res.locals.title = "Todos los productos";
      try {
          const products = await db.productos.findAll();
          res.render("home", { products, formatPrice, toThousand });
      } catch (error) {
          res.render("error", { message: error });
      }
  },
};


module.exports=homeController;
