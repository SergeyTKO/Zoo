


































module.exports.routersConfig = (application) => {
    application.use(loginRouter);
    application.use(signUpRouter);
    application.use(logoutRouter)
    application.use(mainRouter);
    application.use(galleryRouter);
    application.use(contactsRouter)
    application.use(animalsRouter)
const signUpRouter = require('../routes/auth')
const loginRouter = require('../routes/login')
const mainRouter = require("../routes/main");
const animalsRouter = require("../routes/animals");
const tariffsRouter = require("../routes/tariffs");
const contactsRouter = require("../routes/contacts");


module.exports.routesConfig = (application) => {
  // application.use(loginRouter);
  // application.use(signUpRouter);
  // application.use(logoutRouter)
  application.use(mainRouter);
  application.use("/tariffs", tariffsRouter);
  application.use("/contacts", contactsRouter);
  application.use("/animals", animalsRouter);
};
