const { pages } = require("../database/models");

const addPage = async (req, res) => {
  const { page, icon, position, minYAngle, maxYAngle, minXAngle, maxXAngle } =
    await req.body;
  if (page) {
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
      res.json("Page ajouté");
    }
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

module.exports = { addPage };
