const express = require('express');
const router = express.Router();

const paletasController = require('../controller/paletas.controller');

router.get('/find-paletas', paletasController.findPaletasController());
router.get('/find.paleta/:id', paletasController.findPaletaByIdController());


module.exports = router;