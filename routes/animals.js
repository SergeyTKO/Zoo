const router = require('express').Router();

const router = require('express').Router();
// const {checkOut} = require('../middleware/checkOut');

router.get('/', (req,res)=>{
  res.render('animals')

})
  
module.exports = router;
