const { Schema, model } = require('mongoose');

const ArticleSchema = Schema({

    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,        
        required: true
    },
    summary: {
        type: String,        
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

ArticleSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Article', ArticleSchema );

