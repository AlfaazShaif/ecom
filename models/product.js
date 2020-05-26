const fs = require("fs");
const path = require("path");
const Cart = require('./cart');

const dataFilePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  "products.json"
);

const getProductsFromFile = (cb) =>{
    fs.readFile(dataFilePath, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  //save method of Product class
  save() {
    getProductsFromFile( products => {
      if( this.id){
        const existingProductIndex = products.findIndex( prod => prod.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(dataFilePath, JSON.stringify(updatedProducts), err =>{
          console.log(err);
        });
      }
      else {
        //this can be used inside arrow functions too. and not in normal function
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(dataFilePath, JSON.stringify(products), (err) => {
            console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(dataFilePath, JSON.stringify(updatedProducts), err => {
        if(!err){
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }
  
  //static method of Product class to access the data from file
  static fetchAll(cb) {
    getProductsFromFile(cb);
    }

  static findById(id, cb){
    getProductsFromFile(products => {
      const product = products.find(dataFilePath => dataFilePath.id === id);
      cb(product);
    });
  }
};