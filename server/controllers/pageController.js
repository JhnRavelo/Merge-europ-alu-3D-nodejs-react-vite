const { pages } = require("../database/models");
require("dotenv").config();

const addPage = async (req, res) => {
  const { page, position, minYAngle, maxYAngle, minXAngle, maxXAngle, url } =
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
    !home ||
    !url
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
    url,
  });

  if (result) {
    return res.json("Page ajouté");
  }
};

const updatePage = async (req, res) => {
  const {
    id,
    page,
    position,
    minYAngle,
    maxYAngle,
    minXAngle,
    maxXAngle,
    url,
  } = await req.body;
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
          url,
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
          url,
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
          url,
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
          url,
        });
        const result = await updatePage.save();
        if (result) {
          res.json("Page modifié");
        }
      }
    }
  } else res.json("Page non modifié");
};

const getPages = async (req, res) => {
  console.log("page");
  const result = await pages.findAll();

  res.json(result);
};

const deletePage = async (req, res) => {
  const id = await req?.params?.id;
  console.log(id);
  if (!id) return res.json("Pas d'identifiant");

  const page = await pages.findOne({
    where: {
      ID_page: id,
    },
  });

  if (!page) return res.json("Page n'existe pas");

  const result = await page.destroy();

  if (result) return res.json("supprimé");

  res.json("non supprimé");
};

module.exports = { addPage, updatePage, getPages, deletePage };
