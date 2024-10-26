//* Routes para los Articles
//* api/articles

const { Router } = require('express');
const { check } = require('express-validator');

// const { isDate } = require('../helpers/isDate');
const { confirmFields } = require('../middlewares/confirm-fields');
const { confirmJWT } = require('../middlewares/confirm-jwt');
const { getArticles, createArticle, updateArticle, deleteArticle } = require('../controllers/articles');

const router = Router();

// Para que todas validen JWT
router.use( confirmJWT );

router.get('/', getArticles );

router.post(
    '/',
    [
        check('title','Debe ingresar un título').not().isEmpty(),
        check('imageUrl','Debe ingresar la url de la imagen').not().isEmpty(),
        check('summary','Debe ingresar una volanta').not().isEmpty(),
        confirmFields
    ],
    createArticle 
);

router.put(
    '/:id', 
    [
        check('title','Debe ingresar un título').not().isEmpty(),
        check('imageUrl','Debe ingresar la url de la imagen').not().isEmpty(),
        check('summary','Debe ingresar una volanta').not().isEmpty(),        // check('start','Fecha de inicio es obligatoria').custom( isDate ),
        confirmFields
    ],
    updateArticle 
);

router.delete('/:id', deleteArticle );

module.exports = router;