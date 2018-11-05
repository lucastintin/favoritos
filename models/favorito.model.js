const {mongoose} = require('./db');

var favoritoSchema = new mongoose.Schema({
    link: {
        type: String
    }, 
    categoria: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Favorito = mongoose.model('Favorito', favoritoSchema);

module.exports = { Favorito };