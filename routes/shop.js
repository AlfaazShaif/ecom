const path = require('path');
const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');


router.get('/', shopController.getIndexPage);

router.get('/products', shopController.getProductsPage);

router.get('/cart', shopController.getCartPage);

router.post('/cart', shopController.postCartPage);

router.post('/cart-delete-item', shopController.postCartDeleteProductPage);

router.get('/orders', shopController.getOrdersPage);

router.get('/checkout', shopController.getCheckoutPage);


// ":productId" is the dynamic portion of our urls 
// so better put it as last route, as parsing in expressJS is done from TOP-to-DOWN
// "getProductPage" for single product 
router.get('/products/:productId', shopController.getProductPage);

module.exports = router;