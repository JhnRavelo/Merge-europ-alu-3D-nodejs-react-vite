const {trakers} = require('../database/models')

const addTraker = async (req, res) => {
  const { name, email, checked, phone } = await req.body;
  console.log(name);
  if (checked && name && email) {
    checked.map(async (track) => {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      var isTraker = await trakers.findOne({
        where: {
          email: email,
          page: track,
        },
      });
      if (!isTraker) {
        trakers.create({
          name,
          email,
          page: track,
          phone,
          date,
          day,
          month,
          year,
        });
      }
    });
    res.json('Produit ajouté');
  }
}

module.exports = {addTraker}