const { pages } = require("../database/models");

const addPage = async (req, res) => {
  const { page, icon, position, minYAngle, maxYAngle, minXAngle, maxXAngle } =
    await req.body;

  if (
    !page ||
    !icon ||
    !position ||
    !minXAngle ||
    !minYAngle ||
    !maxXAngle ||
    !maxYAngle
  )
    return res.json("Aucun ne doit être vide");

  const result = await pages.create({
    page,
    icon,
    position,
    minYAngle,
    maxYAngle,
    minXAngle,
    maxXAngle,
  });

  if (result) {
    return res.json("Page ajouté");
  }
};

const updatePage = async (req, res) => {
  const {
    id,
    page,
    icon,
    position,
    minYAngle,
    maxYAngle,
    minXAngle,
    maxXAngle,
  } = await req.body;
  if (id) {
    const updatePage = await findOne({
      where: {
        ID_page: id,
      },
    });
    if (!updatePage) return res.json(`La table n'existe pas`);
    updatePage.set(
      page,
      icon,
      position,
      minXAngle,
      minYAngle,
      maxXAngle,
      maxYAngle
    );
    const result = await updatePage.save();
    if (result) {
      res.json("Page ajouté");
    }
  }
};

module.exports = { addPage, updatePage };
