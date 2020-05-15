const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

/*this variable tells which directory are we in. 
 because windows & linus have different direcotry path*/
// const rootDir = require('../util/path');


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProductPage);

// /admin/add-product => GET
router.get('/products', adminController.getProductsPage);


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProductPage);

module.exports = router;