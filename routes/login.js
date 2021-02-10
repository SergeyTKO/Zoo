const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const privateKey = '-hdye-1ekdkd-d5sjsj-5'

router.get('/', function(req,res){
    res.render('login')
})

router.post('/', async function(req, res){
    const {username, password, secretKey} = req.body
    try{
        const user = await User.findOne({username})
        if(user){
            const validPassword = await bcrypt.compare(password, user.password)
            if(validPassword){
                const token = jwt.sign({_id: user._id}, privateKey, {expiresIn: 60*60000})
                res.cookie('jwt', token, {maxAge: 60*60000})
            }else{
                res.json({msg: 'Неверный логин или пароль'})    
            }
        }else{
            res.json({msg: 'Неверный логин или пароль'})
        }
    }catch(err){
        res.json({msg: err.msg})
    }
})

module.exports = router
