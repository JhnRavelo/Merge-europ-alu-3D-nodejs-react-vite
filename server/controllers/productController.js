const { products } = require("../database/models");
const products = require("../database/models/products");

const addProduct = async (req, res) => {
  const { page, title, description, png } = await req.body;

  if (page && title && description && png) {
    const result = await products.create(page, title, description, png);

    if (result) {
      res.json("Produit ajouté");
    }
  }
};

const updateProduct = async (req, res) => {
  const { id, page, title, description, png } = await req.body;

  if (id) {
    const product = await products.findOne({
      where: {
        ID_product: id,
      },
    });

    product.set(
        page,
        title,
        description,
        png,
    )

    const result = await product.save();

    if (result) {
      res.json("Produit modifié");
    }
  }
};

const readProduct = async (req, res) => {
  const products = await products.findAll();

  if (products) {
    res.send(products);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = await req.body;

  if (id) {
    const result = await products.destroy({
      where: {
        ID_product: id,
      },
    });

    if (result) {
      res.json("Produit supprimé");
    }
  }
};

module.exports = { addProduct, updateProduct, readProduct, deleteProduct };
