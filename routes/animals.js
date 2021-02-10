const router = require('express').Router();
const Animal = require ('../models/animalModel') 

// const {checkOut} = require('../middleware/checkOut');

router.get('/', (req,res)=>{
  const animals = Animal.find()
  console.log(animals);

})
  
module.exports = router;
