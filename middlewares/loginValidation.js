const {check, validationResult, body} = require('express-validator');


let loginValidation =
[
    check('contrasena')
            .exists().withMessage('Error de seguridad.') // el campo password no está definido en el request
            .trim()
            .isLength({min: 8}).withMessage('Error: contraseña inválida.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('Error: email inválido.')
            .normalizeEmail(), //sanitiza el email
]

module.exports = loginValidation;