const jwt = require('jsonwebtoken');

const createJWT = ( uid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, process.env.SECRET_QUESTION_JWT, {
            expiresIn: '1h'
        }, (err, token ) => {

            if ( err ){
                console.log(err);
                reject('No se creo el JWToken');
            }

            resolve( token );

        })
    })
}

module.exports = {
    createJWT
}