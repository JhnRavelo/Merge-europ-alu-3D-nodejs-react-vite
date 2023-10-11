const { messages, users } = require("../database/models");
const { Op, Sequelize } = require("sequelize");

const addMessage = async (req, res) => {
  const { sender, receiver, text } = await req.body;

  let img, message;
  if (req?.files?.file) {
    if (req.files.file[0].mimetype.split("/")[0] == "image") {
      img = `${process.env.SERVER_PATH}/img/file/${req.files.file[0].filename}`;
    }
  }

  if ((sender, receiver, text)) {
    message = await messages.create({
      sender,
      receiver,
      text,
    });

    if (img) message.img = img;

    await message.save();

    if (message) {
      res.json("message envoyé");
    }
  }
};

const getMessage = async (req, res) => {
  const { receiver } = await req.body;

  if (!receiver) return res.json("No sender");

  const getMessages = await messages.findAll({
    where: {
      [Op.or]: [
        {
          sender: req.user,
          receiver: receiver,
        },
        {
          sender: receiver,
          receiver: req.user,
        },
      ],
    },
    include: [
      {
        model: users,
        as: "send",
        attributes: ["name", "avatar", "ID_user"],
      },
      {
        model: users,
        as: "receive",
        attributes: ["name", "avatar", "ID_user"],
      },
    ],
    attributes: [
      [Sequelize.literal("DATE(messages.createdAt)"), "date"],
      [Sequelize.literal("TIME(messages.createdAt)"), "time"],
      "text", "img"
    ],
    order: [[Sequelize.col("messages.createdAt"), "ASC"]]
  });

  res.json(getMessages);
};

module.exports = { addMessage, getMessage };
