const router = require('express').Router();
const loginChecker = require('../middleware/loginChecker')
const Tariff = require('../models/tariffModel')
const Animal = require('../models/animalModel')

router.get('/', (req,res)=>{
  res.render('main')
})


router.get('/account', loginChecker, function(req,res){
 
  res.render('account')
})

router.get('/admin', loginChecker, async function(req,res){
  const tariffs = await Tariff.find()
  const animals = await Animal.find()
  res.locals.boss = true
  res.render('admin/admin', {tariffs:tariffs, animals:animals})
})

module.exports = router;
