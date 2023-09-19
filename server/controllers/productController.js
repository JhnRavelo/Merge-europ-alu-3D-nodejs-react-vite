const { products } = require("../database/models");

const addProduct = async (req, res) => {
  const { page, title, description, png, gallery } = await req.body;

  if (page && title && description && png && gallery) {
    const result = await products.create(
      page,
      title,
      description,
      png,
      gallery
    );

    if (result) {
      res.json("Produit ajouté");
    }
  }
};

module.exports = { addProduct };
