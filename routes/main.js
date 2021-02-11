const router = require('express').Router();
const loginChecker = require('../middleware/loginChecker')
const Tariff = require('../models/tariffModel')

router.get('/', (req,res)=>{
  res.render('main')
})


router.get('/account', loginChecker, function(req,res){
 
  res.render('account')
})

router.get('/admin', loginChecker, async function(req,res){
  const tariffs = await Tariff.find()
  res.locals.boss = true
  res.render('admin', {tariffs})
})

module.exports = router;
