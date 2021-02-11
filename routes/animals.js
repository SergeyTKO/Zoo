const router = require('express').Router();
const Animal = require ('../models/animalModel') 


router.get('/', async (req,res)=>{
  const animals = await Animal.find()
  res.json(animals)
  // res.render(animals)

})
  
module.exports = router;
