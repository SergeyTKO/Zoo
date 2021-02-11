const router = require('express').Router();
const Animal = require ('../models/animalModel') 



router.post('/', async (req,res)=>{
    const {name}=req.body
  const animals = await Animal.find({name:name})
  console.log(animals);
  res.json(animals)
  // res.render(animals)

})
  
module.exports = router;
