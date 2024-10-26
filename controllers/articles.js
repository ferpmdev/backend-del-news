const { response } = require('express');
const Article = require('../models/Article');

const getArticles = async( req, res = response ) => {

    const articles = await Article.find()
                                .populate('user','name');

    res.json({
        ok: true,
        articles
    });
}

const createArticle = async ( req, res = response ) => {

    const article = new Article( req.body );

    try {

        article.user = req.uid;
        
        const savedArticle = await article.save();

        res.json({
            ok: true,
            article: savedArticle
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el departamento de atención al cliente'
        });
    }
}

const updateArticle = async( req, res = response ) => {
    
    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const article = await Article.findById( eventoId );

        if ( !article ) {
            return res.status(404).json({
                ok: false,
                msg: 'La nota no existe por ese id'
            });
        }

        if ( article.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Necesita autorización para editar esta nota'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Article.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

        res.json({
            ok: true,
            article: eventoActualizado
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el departamento de atención al cliente'
        });
    }

}

const deleteArticle = async( req, res = response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const article = await Article.findById( eventoId );

        if ( !article ) {
            return res.status(404).json({
                ok: false,
                msg: 'La nota no existe por ese id'
            });
        }

        if ( article.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Necesita autorización para editar esta nota'
            });
        }


        await Article.findByIdAndDelete( eventoId );

        res.json({ ok: true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el departamento de atención al cliente'
        });
    }

}


module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle
}