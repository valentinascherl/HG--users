var express = require('express');
var router = express.Router();
const middlewares = require('../middlewares/generics');

var registroController = require('../controllers/registroController');


/*Middlewares*/
const uploadFileMiddleware = require("../middlewares/uploadFileMiddleware");

/* Registro */
router.get('/registro', registroController.registro);
router.post('/registro',uploadFileMiddleware.uploadFile, registroController.crear);

/*Login*/
var usersController = require('../controllers/usersController');
router.get('/login', usersController.login);
router.post('/login', middlewares.loginUserValidation, usersController.loginUser);
router.get('/perfil', usersController.perfil);

router.get('/perfil/editarPerfil', usersController.editarPerfil);
router.post('/perfil/editarPerfil', usersController.post_editarPerfil);



module.exports = router;
