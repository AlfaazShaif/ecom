const fs = require("fs");
const path = require("path");

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
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  //save method of Product class
  save() {
    this.id = Math.random().toString();
    getProductsFromFile( products => {
      //this can be used inside arrow functions too. and not in normal function
      products.push(this);
      fs.writeFile(dataFilePath, JSON.stringify(products), (err) => {
          console.log(err);
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