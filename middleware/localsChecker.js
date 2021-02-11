module.exports = function (req, res, next) {
  if (req.cookies.jwt) {
    res.locals.login = true;
    console.log(res.locals.login);
    next();
  }
};
