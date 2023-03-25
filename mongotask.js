// 1. Find all the information about each products

db.product.find();

// 2. Find the product price which are between 400 to 800

db.product.find({
  product_price: {
    $gt: 400,
    $lt: 800,
  },
});

// 3. Find the product price which are not between 400 to 600

db.product.find({
  $or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }],
});

// 4. List the four product which are grater than 500 in price

db.product.find({ product_price: { $gt: 500 } }).limit(4);
// Note: There are only 3 documents greater than 500.

// 5. Find the product name and product material of each products

db.product.find({}, { product_name: 1, product_material: 1 });

// 6. Find the product with a row id of 10

db.product.find({ id: "10" });

// 7. Find only the product name and product material

db.product.find({}, { _id: 0, product_name: 1, product_material: 1 });

// 8. Find all products which contain the value of soft in product material

db.product.aggregate([{ $match: { product_material: "Soft" } }]);

// 9. Find products which contain product color indigo and product price 492.00

db.product.find({
  $and: [
    {
      product_color: "indigo",
    },
    {
      product_price: 492.0,
    },
  ],
});