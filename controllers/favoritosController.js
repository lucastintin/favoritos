const express   = require('express');
var router      = express.Router();

var {Favorito} = require('./../models/favorito.model');

router.get('', (req, res) => {

    var {Categoria} = require('./../models/categoria.model');  

    var categorias;
    Categoria.find((err, cats) => {
        if (!err){
            categorias = cats;
        }
    });

    Favorito.find((err, favoritos) =>{
        if(!err){
            res.render('./favorito/index', { favoritos, categorias });
        }
    });
    
});

module.exports = router;