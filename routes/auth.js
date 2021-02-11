const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const adminKey = "bullet";
const privateKey = "-hdye-1ekdkd-d5sjsj-5";

router.get("/", function (req, res) {
  res.render("auth");
});

router.post("/", async function (req, res) {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const foundUserByName = await User.findOne({ username: req.body.name });
  const foundUserByMail = await User.findOne({ email: req.body.email });
  try {
    if (foundUserByMail || foundUserByName) {
      res.json({ msg: "Такой пользователь уже существует" });
    } else {
      if (req.body.secretKey === adminKey) {
        const admin = new User({
          username: req.body.name,
          password,
          email: req.body.email,
          isAdmin: true,
        });
        await admin.save();
        const token = jwt.sign({ _id: admin._id }, privateKey, {
          expiresIn: 60 * 60000,
        });
        res
          .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
          .redirect("/admin");
      } else {
        const user = new User({
          username: req.body.name,
          password,
          email: req.body.email,
          isAdmin: false,
        });
        await user.save();
        const token = jwt.sign({ _id: user._id }, privateKey, {
          expiresIn: 60 * 60000,
        });
        res
          .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
          .redirect("/account");
      }
    }
  } catch (err) {
    res.json({ msg: err.msg });
  }
});

module.exports = router;
