const Product = require('../models/product');

exports.getProductsPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProductPage = (req, res, next) => {
  const prodId = req.params.prodcutId;
  Product.findById(prodId, product => {
    console.log(product);
  });
  res.redirect('/');
};

exports.getIndexPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'ShopHomePage',
      path: '/'
    });
  });
};

exports.getCartPage = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrdersPage = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckoutPage = (req, res, next) => {
  res.render('shop/cart', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

