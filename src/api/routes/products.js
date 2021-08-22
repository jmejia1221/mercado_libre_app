const express = require('express');
const router = express.Router();
const Products = require('../modules/products');

module.exports = router;

router.get('/', (req, res) => {
    res.status(200).send("Mercadolibre api")
})

// Route to '/api/items/'
router.get('/items', (req, res) => {
    const query = req.query.search;
    Products.getProducts('silla', res);
})

// Route to '/api/items/:id'
router.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    Products.getProductDetails(itemId, res);
})
