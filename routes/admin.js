const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProductPage);

// /admin/add-product => GET
router.get('/products', adminController.getProductsPage);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProductPage);

router.get('/edit-product/:productId', adminController.getEditProductPage);

router.post('/edit-product', adminController.postEditProductPage);

router.post('/delete-product', adminController.postDeleteProductPage);

module.exports = router;