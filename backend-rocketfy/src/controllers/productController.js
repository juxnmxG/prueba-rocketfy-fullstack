const productService = require("../services/productService");

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductForId = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productService.getProductForId(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editProduct = async (req, res) => {
  const productData = req.body;
  const id = req.params.id;
  try {
    const product = await productService.updateProduct(id, productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await productService.deleteProduct(id);
    res.status(201).json("Producto eliminado con exito!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
