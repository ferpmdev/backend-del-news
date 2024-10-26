const { response } = require('express');
const jwt = require('jsonwebtoken');

const confirmJWT = ( req, res = response, next ) => {

    // headers
    const token = req.header('x-jwtoken');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_QUESTION_JWT
        );

        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    next();
}

module.exports = {
    confirmJWT
}