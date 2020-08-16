var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController');
var middPermisos = require('../middlewares/middPermisos');


/* GET users listing. */
router.get('/', middPermisos.soloUsuariosLogueados, carritoController.carrito);

router.post('/', middPermisos.soloUsuariosLogueados, carritoController.carritoAdd);



module.exports = router;
