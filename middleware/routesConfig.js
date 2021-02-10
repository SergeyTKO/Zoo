const mainRouter = require('../routes/main');
const animalsRouter = require('../routes/animals');
const galleryRouter = require('../routes/gallery');
const contactsRouter = require('../routes/contacts')
const signUpRouter = require('../routes/auth')
const loginRouter = require('../routes/login')

module.exports.routersConfig = (application) => {
    application.use(loginRouter);
    application.use(signUpRouter);
    application.use(logoutRouter)
    application.use(mainRouter);
    application.use(galleryRouter);
    application.use(contactsRouter)
    application.use(animalsRouter)

};
