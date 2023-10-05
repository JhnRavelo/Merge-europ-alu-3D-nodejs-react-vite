const { trakers, users, products, pages } = require("../database/models");

const addTraker = async (req, res) => {
  const { name, email, checked, phone } = await req.body;
  const { ID_user } = req.user;
  let response, isTraker;

  if (checked && name && email && checked[0] !== "") {
    checked.map(async (track) => {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      const product = await products.findOne({
        where: {
          title: track,
        },
      });

      isTraker = await trakers.findOne({
        where: {
          userId: ID_user,
          productId: product.ID_product,
        },
      });

      if (!isTraker) {
        response = await trakers.create({
          date,
          day,
          month,
          year,
          userId: ID_user,
          productId: product.ID_product,
        });
      }
    });
  }

  if (response) {
    return res.json("Produit ajouté");
  } else {
    return res.json("Produit déjà ajouté");
  }
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
      userId: user.ID_user,
    },
  });

  if (!traker) {
    return res.json("No Page");
  }

  res.json(traker);
};

const getTrakers = async (req, res) => {
  const allTrakers = await trakers.findAll({
    include: [
      {
        model: users,
        attributes: ["name", "email", "type"],
      },
      {
        model: products,
        attributes: ["title"],
        include: [
          {
            model: pages,
            attributes: ["page"],
          },
        ],
      },
    ],
  });

  console.log(allTrakers);

  res.json(allTrakers);
};

module.exports = { addTraker, getTraker, getTrakers };
