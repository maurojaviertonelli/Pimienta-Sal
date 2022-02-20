const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.index) /*siempre va index?*/

router.get('/detalleMenu', mainController.product) /*siempre va product?*/

/*
router.get("/productos/:id?", function(req,res) {
    req.params.id
});
*/

module.exports = router;