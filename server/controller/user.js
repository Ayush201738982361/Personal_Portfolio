const message = require("../model/user");

async function createUserMsg(req, res) {
  try {
    const newMessage = await message.create(req.body);
    console.log(newMessage);
    res.status(201).json({ stat: "User message send" });
  } catch (err) {
    console.log("Error in creating user", err);
  }
}

module.exports = {
  createUserMsg,
};
