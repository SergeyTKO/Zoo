const router = require('express').Router();
const Tariff = require('../models/tariffModel')


router.get('/', async (req,res)=>{
  const tariffs = await Tariff.find()
  res.json(tariffs)

})

module.exports = router;
