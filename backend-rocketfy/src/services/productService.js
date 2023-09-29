const Product = require("../models/product");

class ProductService {
  constructor() {}

  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }

  async getProductForId(id) {
    try {
      const products = await Product.findById(id);
      return products;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }
  async createProduct(productData) {
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  }

  async updateProduct(productId, productData) {
    try {
      
      const product = await Product.findById(productId);

      const change = {
        price: product.price,
        stock: product.stock,
        timestamp: new Date(),
      };

      product.name = productData.name;
      product.description = productData.description;
      product.sku = productData.sku;
      product.image = productData.image;
      product.tags = productData.tags;
      product.price = productData.price;
      product.stock = productData.stock;

      product.priceStockHistory.push(change);

      await product.save();

      return product;
    } catch (error) {
      throw new Error("Error al actualizar el producto");
    }
  }

  async deleteProduct(productId) {
    try {
      await Product.findByIdAndDelete(productId);
    } catch (error) {
      throw new Error("Error al eliminar el producto");
    }
  }
}

module.exports = new ProductService();
