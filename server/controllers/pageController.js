const { pages } = require("../database/models");

const addPage = async (req, res) => {
  const { page, icon, home, position, minYAngle, maxYAngle, minXAngle, maxXAngle } =
    await req.body;

  if (
    !page ||
    !icon ||
    !position ||
    !minXAngle ||
    !minYAngle ||
    !maxXAngle ||
    !maxYAngle ||
    !home
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
    home
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
    home
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
      maxYAngle,
      home
    );
    const result = await updatePage.save();
    if (result) {
      res.json("Page ajouté");
    }
  }
};

const getPages = async(req, res)=>{
  const result = await pages.findAll()

  res.json(result)
}

module.exports = { addPage, updatePage, getPages };
