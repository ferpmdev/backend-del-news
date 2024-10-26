//* Rutas de Usuarios / Auth
//* host + /api/auth

const { Router } = require('express');
const { check } = require('express-validator');
const { confirmFields } = require('../middlewares/confirm-fields');
const { crearteNewUser, loginUser, confirmToken } = require('../controllers/auth');
const { confirmJWT } = require('../middlewares/confirm-jwt');

const router = Router();

router.post(
    '/new', 
    [ // estos son los middlewares
        check('name', 'Debe ingresar su nombre.').not().isEmpty(),
        check('email', 'Debe ingresar su email.').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        confirmFields
    ],
    crearteNewUser 
);

router.post(
    '/',
    [
        check('email', 'Debe ingresar su email').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min: 6 }),
        confirmFields
    ],
    loginUser 
);

router.get('/renew', confirmJWT ,confirmToken );

module.exports = router;