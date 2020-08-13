const fs = require('fs');
const path = require('path');
//const productController = require('../controllers/productController');
const usersController = require('../controllers/usersController');
const {check, validationResult, body} = require('express-validator');


   let middlewares = {
      middlewareGenerico: function(req, res, next){ // middleware not used (only structure)
         // code here
         next();
      },
      // It validates "New Product" form
     /* newProductValidation: [
         check('codigo')
            .exists().withMessage('Error de seguridad.') // el campo código no está definido en el request
            .trim() // sanitiza el campo quitandole los espacios en blanco laterales
            .isNumeric({no_symbols: true}).withMessage('El Código del producto sólo acepta dígitos numéricos.'),
         check('nombre')
            .exists().withMessage('Error de seguridad.') // el campo nombre no está definido en el request
            .trim()
            .isLength({min: 3}).withMessage('El Nombre del producto debe tener al menos 3 caracteres.'),
         check('origen')
            .exists().withMessage('Error de seguridad.') // el campo origen no está definido en el request
            .trim()
            .isLength({min: 2}).withMessage('El Origen del producto debe contener al menos 2 caracteres.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('El Email no es válido.')
            .normalizeEmail(), //sanitiza el email
         body('codigo').custom(function(valor){ // validación customizada para chequear que el prod. no exista antes de intentar agregarlo
            let exist = productController.searchByCode(valor);
            if (exist == null) { // el producto no existe
               return true; // pasó la validación
            }else{ // el producto existe!
               return false; // no pasó la validación, se mostrará mensaje de error
            }
         }).withMessage('No se puede agregar el producto porque ya existe. Pruebe con otro código.')
      ],
      // It validates "Edit Product" form
      editProductValidation: [
         check('nombre')
            .exists().withMessage('Error de seguridad.') // el campo nombre no está definido en el request
            .trim()
            .isLength({min: 3}).withMessage('El Nombre del producto debe contener al menos 3 caracteres.'),
         check('origen')
            .exists().withMessage('Error de seguridad.') // el campo origen no está definido en el request
            .trim()
            .isLength({min: 2}).withMessage('El Origen del producto debe contener al menos 2 caracteres.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('El Email no es válido.')
            .normalizeEmail(), //sanitiza el email
         body().custom(function(req){ // valida que el usuario haya modificado algún campo para poder editar el producto
            let producto = productController.searchByCode(req.codigo);
            if (producto.nombre === req.nombre && producto.origen === req.origen && producto.email === req.email) {
               return false; // si no modificó ningún campo entonces lo redireccionamos con un error
            }else {
               return true;
            }
         }).withMessage('Error: se intentó editar un producto pero no se modificó ningún campo.')
      ],
      // It writes a log of all routes that user accesses
      userlog: function(req, res, next){
         let logFile = path.join(__dirname, '..') + '/userLog.txt';
         fs.appendFileSync(logFile, `Se ingresó a la ruta: ${req.url}\n`);
         next();
      },*/
      // It validates a User Login form
      loginUserValidation:[
         check('contrasena')
            .exists().withMessage('Error de seguridad.') // el campo password no está definido en el request
            .trim()
            .isLength({min: 6}).withMessage('Error: contraseña inválida.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('Error: email inválido.')
            .normalizeEmail(), //sanitiza el email
      ],
      // It validates a User Register form
      registerUserValidation: [
         check('nombre')
            .exists().withMessage('Error de seguridad.') // el campo nombre no está definido en el request
            .trim()
            .isLength({min: 3}).withMessage('Error: El Nombre debe tener al menos 3 caracteres.'),
         check('apellido')
            .exists().withMessage('Error de seguridad.') // el campo apellido no está definido en el request
            .trim()
            .isLength({min: 3}).withMessage('Error: El Apellido debe tener al menos 3 caracteres.'),
         check('password')
            .exists().withMessage('Error de seguridad.') // el campo password no está definido en el request
            .trim()
            .isLength({min: 6}).withMessage('Error: La Contraseña debe contener al menos 6 caracteres.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('El Email no es válido.')
            .normalizeEmail(), //sanitiza el email
         /*body().custom(function(req){ // valida que se haya repetido la constraseña
               if (req.password === req.password2) {
                  return true; // las contraseñas son iguales
               }else {
                  return false; // error, las constraseñas son distintas
               }
            }).withMessage('Error: debe repetir la contraseña en el campo "Repetir Contraseña".'),*/
         body('email').custom(function(valor){ // chequeamos si el usuario ya existe
            let exist = usersController.searchByEmail(valor);
            if (exist == null) {
               return true;
            }else{
               return false; // no pasó la validación, se mostrará mensaje de error
            }
         }).withMessage('Error: ya existe un usuario registrado con el mismo email.'),
      ],
   }

module.exports = middlewares;
