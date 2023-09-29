const { trakers, users, products } = require("../database/models");

const addTraker = async (req, res) => {
  const { name, email, checked, phone } = await req.body;
  const {ID_user} = req.user


  if (checked && name && email && checked[0] !== "") {
    checked.map(async (track) => {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      const product = await products.findOne({where: {
        title: track
      }})

      if(!product) return res.json("produit non trouvé")

      const isTraker = await trakers.findOne({
        where: {
          email: email,
          product: track,
        },
      });

      if (!isTraker) {
        const response = await trakers.create({
          name,
          email,
          product: track,
          phone,
          date,
          day,
          month,
          year,
          userId: ID_user,
          productId: product.ID_product,
        });
        if (response) {
          res.json("Produit ajouté");
        }
      }else res.json("Produits déjà ajouté")
    });
  }else res.json("Produits non ajouté")
};

const getTraker = async (req, res) => {
  const cookie = await req.cookies;

  if (!cookie?.jwt) {
    return res.sendStatus(401);
  }
  const refreshToken = cookie.jwt;

  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) {
    return res.sendStatus(401);
  }

  const traker = await trakers.findAll({
    where: {
      email: user.email,
    },
  });

  if (!traker) {
    return res.json("No Page");
  }

  res.send(traker);
};

module.exports = { addTraker, getTraker };
