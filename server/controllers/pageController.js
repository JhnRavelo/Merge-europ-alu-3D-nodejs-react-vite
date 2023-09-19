const { pages } = require("../database/models");

const addPage = async (req, res) => {
  const { page, icon, position } = await req.body;
  if (page) {
    const result = await pages.create({
      page,
      icon,
      position,
    });

    if (result) {
      res.json("Page ajouté");
    }
  }
};

module.exports = { addPage };
