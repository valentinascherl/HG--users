const {check, validationResult, body} = require('express-validator');
const usersController = require('../controllers/usersController');


let registerValidation =
 [
    check('nombre')
            .exists().withMessage('Error de seguridad.') // el campo nombre no está definido en el request
            .trim()
            .isLength({min: 2}).withMessage('Error: El Nombre debe tener al menos 2 caracteres.'),
         check('apellido')
            .exists().withMessage('Error de seguridad.') // el campo apellido no está definido en el request
            .trim()
            .isLength({min: 2}).withMessage('Error: El Apellido debe tener al menos 2 caracteres.'),
         check('contrasena')
            .exists().withMessage('Error de seguridad.') // el campo password no está definido en el request
            .trim()
            .isLength({min: 8}).withMessage('Error: La Contraseña debe contener al menos 8 caracteres.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('El Email no es válido.')
            .normalizeEmail(), //sanitiza el email
         /*body('email').custom(function(valor){ // chequeamos si el usuario ya existe
            let exist = usersController.searchByEmail(valor);
            if (exist == null) {
               return true;
            }else{
               return false; // no pasó la validación, se mostrará mensaje de error
            }
         }).withMessage('Error: ya existe un usuario registrado con el mismo email.')*/

]

module.exports = registerValidation;