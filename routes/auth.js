const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

const adminKey = 'bullet'
const privateKey = '-hdye-1ekdkd-d5sjsj-5'

router.get('/', function(req, res){
    res.render('/auth')
})

router.post('/', async function(req,res){
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    if(req.body.secretKey === adminKey){
        const admin = new User({
            username: req.body.username,
            password,
            isAdmin: true
        })
        await admin.save()
        const token = jwt.sign({_id: admin._id}, privateKey, {expiresIn: 60*60})
        req.cookies('jwt', token).redirect('/account')
    }else{
        const user = new User({
            username: req.body.username,
            password,
            isAdmin: false
        })
        await user.save()
        const token = jwt.sign({_id: user._id}, privateKey, {expiresIn: 60*60})
        res.cookie('jwt', token).redirect('/admin')
    }

})

module.exports = router