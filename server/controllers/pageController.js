const { pages } = require("../database/models");
require("dotenv").config();

const addPage = async (req, res) => {
  const { page, position, minYAngle, maxYAngle, minXAngle, maxXAngle } =
    await req.body;

  const addPage = await pages.findOne({
    where: {
      page: page,
    },
  });
  if (addPage) return res.json("Page existe déjà");
  let icon, home;
  if (req?.files?.icon) {
    icon = `${process.env.SERVER_PATH}/img/icon/${req.files.icon[0].filename}`;
  } else icon = null;
  if (req?.files?.home) {
    home = `${process.env.SERVER_PATH}/img/home/${req.files.home[0].filename}`;
  } else home = null;

  console.log(icon);
  console.log(home);

  if (
    !page ||
    !position ||
    !minXAngle ||
    !minYAngle ||
    !maxXAngle ||
    !maxYAngle ||
    !icon ||
    !home
  ) {
    return res.json("Aucun ne doit être vide");
  }

  const result = await pages.create({
    page,
    icon,
    position,
    minYAngle,
    maxYAngle,
    minXAngle,
    maxXAngle,
    home,
  });

  if (result) {
    return res.json("Page ajouté");
  }
};

const updatePage = async (req, res) => {
  const { id, page, position, minYAngle, maxYAngle, minXAngle, maxXAngle } =
    await req.body;
  let icon, home;
  if (req?.files?.icon) {
    icon = `${process.env.SERVER_PATH}/img/icon/${req.files.icon[0].filename}`;
  } else icon = null;
  if (req?.files?.home) {
    home = `${process.env.SERVER_PATH}/img/home/${req.files.home[0].filename}`;
  } else home = null;
  console.log(home);
  console.log(icon);
  if (id) {
    const updatePage = await pages.findOne({
      where: {
        ID_page: id,
      },
    });

    if (!updatePage) {
      return res.json(`La table n'existe pas`);
    } else {
      if (icon && home) {
        updatePage.set({
          page,
          icon,
          position,
          minXAngle,
          minYAngle,
          maxXAngle,
          maxYAngle,
          home,
        });
        const result = await updatePage.save();
        if (result) {
          res.json("Page modifié");
        }
      } else if (!icon && home) {
        updatePage.set({
          page,
          position,
          minXAngle,
          minYAngle,
          maxXAngle,
          maxYAngle,
          home,
        });
        const result = await updatePage.save();
        if (result) {
          res.json("Page modifié");
        }
      } else if (icon && !home) {
        updatePage.set({
          page,
          position,
          minXAngle,
          minYAngle,
          maxXAngle,
          maxYAngle,
          icon,
        });
        const result = await updatePage.save();
        if (result) {
          res.json("Page modifié");
        }
      } else if (!icon && !home) {
        // console.log(updatePage);

        updatePage.set({
          page,
          position,
          minXAngle,
          minYAngle,
          maxXAngle,
          maxYAngle,
        });
        const result = await updatePage.save();
        if (result) {
          res.json("Page modifié");
        }
      }
    }
  }
};

const getPages = async (req, res) => {
  const result = await pages.findAll();

  res.json(result);
};

module.exports = { addPage, updatePage, getPages };
