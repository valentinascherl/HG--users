var express = require('express');
var router = express.Router();
//const middlewares = require('../middlewares/generics');

var registroController = require('../controllers/registroController');

var registerValidation = require('../middlewares/registerValidation');
var loginValidation = require('../middlewares/loginValidation');


/*Middlewares*/
const uploadFileMiddleware = require("../middlewares/uploadFileMiddleware");

/* Registro */
router.get('/registro', registroController.registro);
router.post('/registro',registerValidation, uploadFileMiddleware.uploadFile, registroController.crear);

/*Login*/
var usersController = require('../controllers/usersController');
router.get('/login', usersController.login);
router.post('/login', loginValidation, usersController.loginUser);
router.get('/perfil', usersController.perfil);

router.get('/perfil/editarPerfil', usersController.editarPerfil);
router.post('/perfil/editarPerfil', usersController.post_editarPerfil);



module.exports = router;
