const { trakers, users } = require("../database/models");

const addTraker = async (req, res) => {
  const { name, email, checked, phone } = await req.body;
  if (checked && name && email) {
    checked.map(async (track) => {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      var isTraker = await trakers.findOne({
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
        });
        if(response){
          res.json("Produit ajouté");
        }
        
      }
    });
    
  }else {
    res.json("")
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
      email: user.email,
    },
  });

  if (!traker) {
    return res.json("No Page");
  }

  res.send(traker);
};

module.exports = { addTraker, getTraker };
