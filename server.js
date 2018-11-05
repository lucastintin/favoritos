const express = require('express');
const bodyParser = require('body-parser');

const config  = require('./config/config');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const categoriaController = require('./controllers/categoriaController');
const favoritoController = require('./controllers/favoritosController');

app.get('/', (req, res) => {
    res.send('Bot World.');
});

//Rotas Categoria
app.use('/categorias', categoriaController);

//Rotas dos Links
app.use('/favoritos', favoritoController);


app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${config.PORT}`);
});