const {check, validationResult, body} = require('express-validator');


let productValidator =
[
    check('nombre')
            .exists().withMessage('Error de seguridad.') // el campo nombre no está definido en el request
            .trim()
            .isLength({min: 5}).withMessage('El Nombre del producto debe tener al menos 5 caracteres.'),
    check('descripcion')
            .exists().withMessage('Error de seguridad')
            .isLength({min:20}).withMessage('El campo debe tener al menos 20 caracteres.'),
    check('imagen')
            .exists().withMessage('Error de seguridad')
]

  module.exports = productValidator;