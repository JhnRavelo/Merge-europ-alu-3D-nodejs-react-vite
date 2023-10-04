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
    // console.log("addPage");

  // let icon, home;
  // if (req?.files?.icon) {
  //   icon = `${process.env.SERVER_PATH}/img/icon/${req.files.icon[0].filename}`;
  // } else icon = null;
  // if (req?.files?.home) {
  //   home = `${process.env.SERVER_PATH}/img/home/${req.files.home[0].filename}`;
  // } else home = null;

  // console.log(icon);
  // console.log(home);

  if (
    !page ||
    !position ||
    !minXAngle ||
    !minYAngle ||
    !maxXAngle ||
    !maxYAngle ||
    !url
  ) {
    return res.json("Aucun ne doit être vide");
  }

  const result = await pages.create({
    page,
    position,
    minYAngle,
    maxYAngle,
    minXAngle,
    maxXAngle,
    url,
  });

  if (result) {
    return res.json("Page ajouté");
  }
};

const uploadPageImage = async (req, res) => {
  let icon, home, pageUpload;
  const { id, page } = req.body;

  if (id) {
    pageUpload = await pages.findOne({
      where: {
        ID_page: id,
      },
    });
  } else if (!id && page) {
    pageUpload = await pages.findOne({
      where: {
        page: page,
      },
    });
  }else {
    res.json("Aucun")
  }

  if (!pageUpload) return res.json("Non trouvé");

  if (req?.files?.icon) {
    if (req.files.icon[0].mimetype.split("/")[0] == "image") {
      icon = `${process.env.SERVER_PATH}/img/icon/${req.files.icon[0].filename}`;
    }
  }
  if (req?.files?.home) {
    if (req.files.home[0].mimetype.split("/")[0] == "image") {
      home = `${process.env.SERVER_PATH}/img/home/${req.files.home[0].filename}`;
    }
  }

  if (icon) pageUpload.icon = icon;
  if (home) pageUpload.home = home;

  const result = await pageUpload.save();

  if(result){
    res.json("Upload product")
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
  // let icon, home;
  // if (req?.files?.icon) {
  //   icon = `${process.env.SERVER_PATH}/img/icon/${req.files.icon[0].filename}`;
  // } else icon = null;
  // if (req?.files?.home) {
  //   home = `${process.env.SERVER_PATH}/img/home/${req.files.home[0].filename}`;
  // } else home = null;
  // console.log(home);
  // console.log(icon);
  if (id) {
    const updatePage = await pages.findOne({
      where: {
        ID_page: id,
      },
    });

    if (!updatePage) {
      return res.json(`La table n'existe pas`);
    } else {
      if (
        page &&
        position &&
        minXAngle &&
        maxXAngle &&
        minYAngle &&
        maxYAngle &&
        url
      ) {
        updatePage.set({
          page,
          position,
          minXAngle,
          minYAngle,
          maxXAngle,
          maxYAngle,
          url,
        });
      }
      // if (icon) updatePage.icon = icon;
      // if (home) updatePage.home = home;

      const result = await updatePage.save();
      if (result) {
        res.json("Page modifié");
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

module.exports = { addPage, updatePage, getPages, deletePage, uploadPageImage };
