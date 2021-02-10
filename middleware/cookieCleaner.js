const { localsAsTemplateData } = require("hbs")

module.exports = function(req,res,next){
    if(req.cookies.jwt){
        res.locals.login = false
        res.clearCookie(jwt)
    }
    next()
}