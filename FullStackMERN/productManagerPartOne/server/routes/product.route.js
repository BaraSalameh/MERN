const ProductController = require("../controllers/product.controller");

module.exports = app  => {
    app.get("/api/products/:id", ProductController.findProduct);
    app.post("/api/products/new", ProductController.createProduct);
}