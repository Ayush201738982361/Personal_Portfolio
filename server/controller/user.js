const message = require("../model/user");

async function createUserMsg(req, res) {
  try {
    const { email } = req.body;
    const existingEmail = await message.find({ email });

    if (existingEmail.length > 0) {
      return res.status(409).json({ message: "Email Already Exists" });
    }
    const newMessage = await message.create(req.body);
    console.log(newMessage);
    res.status(201).json({ stat: "User message send" });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ message: "Email already exists (DB constraint)" });
    }
    console.log("Error in creating user", err);
  }
}

module.exports = {
  createUserMsg,
};
