const authRouter = require("../routes/auth");
const loginRouter = require("../routes/login");
const mainRouter = require("../routes/main");
const animalsRouter = require("../routes/animals");
const tariffsRouter = require("../routes/tariffs");
const contactsRouter = require("../routes/contacts");
const logoutRouter = require('../routes/logout')

module.exports.routesConfig = (application) => {
  application.use("/login", loginRouter);
  application.use("/auth", authRouter);
  application.use('/logout', logoutRouter)
  application.use(mainRouter);
  application.use("/tariffs", tariffsRouter);
  application.use("/contacts", contactsRouter);
  application.use("/animals", animalsRouter);
};
