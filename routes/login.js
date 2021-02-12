const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const privateKey = "-hdye-1ekdkd-d5sjsj-5";

router.get("/", function (req, res) {
  res.json();
});

router.post("/", async function (req, res) {
  const { name, password } = req.body;
  let user;
  try {
    if (name.includes("@")) {
      user = await User.findOne({ email: name.toLowerCase() });
    } else {
      user = await User.findOne({ username: name.toLowerCase() });
    }
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        if (user.isAdmin) {
          const token = jwt.sign({ _id: user._id }, privateKey, {
            expiresIn: 60 * 60000,
          });
          res
            .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
            .redirect("/admin");
        } else if (!user.isAdmin) {
          const token = jwt.sign({ _id: user._id }, privateKey, {
            expiresIn: 60 * 60000,
          });
          res
            .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
            .redirect("/account");
        } else {
          res.json({ msg: "Неверный логин или Пароль" });
        }
      }
    } else {
      res.json({ msg: "Неверный Логин или пароль" });
    }
  } catch (err) {
    res.json({ msg: err.msg });
  }
});

module.exports = router;
