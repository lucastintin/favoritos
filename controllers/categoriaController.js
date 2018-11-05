const express   = require('express');
var router      = express.Router();

var {Categoria} = require('./../models/categoria.model');

router.get('', (req, res) => {
    res.render('./categoria/index', { mensagem : null });
});

module.exports = router;