const jwt = require('jsonwebtoken')
const privateKey = '-hdye-1ekdkd-d5sjsj-5'

module.exports = function(req,res,next){
    if(req.cookies.jwt){
        jwt.verify(req.cookies.jwt, privateKey, (err, decoded)=>{
            if(err){
                console.log('jwt помер')
                res.redirect('/login')
            }else{
                console.log(decoded)
                // res.locals.login = true
                console.log(res.locals.login)
                next()
            }
        })
    }else{
        console.log('jwt нет')
        res.redirect('/login')
    }
}

