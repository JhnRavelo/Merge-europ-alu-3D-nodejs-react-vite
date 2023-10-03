const { products, pages } = require("../database/models");
require("dotenv").config();

const addProduct = async (req, res) => {
  const { page, title, description } = await req.body;

  let png, pub, gallery;

  const findProduct = await products.findOne({
    where: {
      title: title,
    },
  });

  if (findProduct) return res.json("product déjà ajouté");

  const findPage = await pages.findOne({
    where: {
      page: page,
    },
  });

  if (!findPage) return res.json("Page non trouvé");

  if (req?.files?.png) {
    png = `${process.env.SERVER_PATH}/img/png/${req.files.png[0].filename}`;
  }
  if (req?.files?.pub) {
    pub = `${process.env.SERVER_PATH}/img/pub/${req.files.pub[0].filename}`;
  }
  if (req?.files?.gallery) {
    const galleryArray = new Array();

    req.files.gallery.map((file) => {
      galleryArray.push(
        `${process.env.SERVER_PATH}/img/gallery/${file.filename}`
      );
    });

    gallery = galleryArray.join(",");
  }

  if (page && title && description && png && gallery && pub) {
    const result = await products.create({
      pageId: findPage.ID_page,
      title,
      description,
      png,
      gallery,
      pub,
    });

    if (result) {
      res.json("Produit ajouté");
    }
  }
};

const updateProduct = async (req, res) => {
  const { id, title, description, page } = await req.body;

  let png, pub, gallery

  if (req?.files?.png) {
    png = `${process.env.SERVER_PATH}/img/png/${req.files.png[0].filename}`;
  }
  if (req?.files?.pub) {
    pub = `${process.env.SERVER_PATH}/img/pub/${req.files.pub[0].filename}`;
  }
  if (req?.files?.gallery) {
    const galleryArray = new Array();

    req.files.gallery.map((file) => {
      galleryArray.push(
        `${process.env.SERVER_PATH}/img/gallery/${file.filename}`
      );
    });
    gallery = galleryArray.join(",");
  }

  console.log(png);

  if (id) {
    const product = await products.findOne({
      where: {
        ID_product: id,
      },
    });
    if (!product) return res.json("Produit n'existe pas");

    const findPage = await pages.findOne({where:{
      page: page
    }})

    if(!findPage) return res.json("Page non trouvé")

    if (title && description) {
      product.set({ pageId: findPage.ID_page, title, description});
    } 

    if(png) product.png = png
    if(pub) product.pub = pub
    if(gallery) product.gallery = gallery

    const result = await product.save();

    if (result) {
      res.json("Produit modifié");
    }
  } else {
    res.json("pas de id");
  }
};

const getProducts = async (req, res) => {
  const allProducts = await products.findAll({
    include: [
      {
        model: pages,
        required: true,
        attributes: ["page"],
      },
    ],
  });

  if (allProducts) {
    res.json(allProducts);
  }
};

const deleteProduct = async (req, res) => {
  const id = await req?.params?.id;

  if (id) {
    const result = await products.destroy({
      where: {
        ID_product: id,
      },
    });

    if (result) {
      res.json("supprimé");
    }
  }else res.json("Pas d'identifiant")
};

module.exports = { addProduct, updateProduct, getProducts, deleteProduct };
