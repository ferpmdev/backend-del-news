const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { createJWT } = require('../helpers/jwt');
 
const crearteNewUser = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        let user = await Usuario.findOne({ email });

        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El mail ya esta registrado'
            });
        }

        user = new Usuario( req.body );
    
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );


        await user.save();

        const token = await createJWT( user.id, user.name );
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el departamento de atención al cliente'
        });
    }
}


const loginUser = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const user = await Usuario.findOne({ email });

        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe la cuenta con ese email'
            });
        }

        const validPassword = bcrypt.compareSync( password, user.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        const token = await createJWT( user.id, user.name );

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el departamento de atención al cliente'
        });
    }

}


const confirmToken = async (req, res = response ) => {

    const token = await createJWT( req.uid, req.name );

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearteNewUser,
    loginUser,
    confirmToken
}