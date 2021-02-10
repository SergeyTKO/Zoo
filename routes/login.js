const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')


const privateKey = '-hdye-1ekdkd-d5sjsj-5'

router.get('/', function(req,res){
    res.render('login')
})

// router.post('/', async function(req, res){
//     const {username, password, secretKey} = req.body
//     try{
//         const user = await 
//     }
//     catch{

//     }
// })


module.exports = router
