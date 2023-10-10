const { messages } = require("../database/models");

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

    if(message){
        res.json("message envoyé")
    }
  }
};

module.exports = { addMessage };
