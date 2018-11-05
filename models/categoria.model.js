const {mongoose} = require('./db');

var categoriaSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = { Categoria };