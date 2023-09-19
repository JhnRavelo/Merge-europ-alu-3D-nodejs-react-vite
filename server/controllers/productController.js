const { products } = require("../database/models");
const products = require("../database/models/products");

const addProduct = async (req, res) => {
  const { page, title, description, png } = await req.body;

  if (page && title && description && png ) {
    const result = await products.create(
      page,
      title,
      description,
      png,
    );

    if (result) {
      res.json("Produit ajouté");
    }
  }
};

const updateProduct = async (req, res) => {
    const {id ,page, title, description, png} = await req.body

    if(id){
        const product = await products.findOne({
            where: {
                ID_product: id
            }
        })

        product.page = page
        product.title = title
        product.description = description
        product.png = png

        await product.save()
    }
}

const readproduct = async (req, res) => {
    const products = await products.findAll()

    res.send(products)
}

module.exports = { addProduct, updateProduct, readproduct };
