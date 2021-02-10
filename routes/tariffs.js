const router = require('express').Router();

router.get('/', (req,res)=>{
  res.render('tariffs')

})

module.exports = router;
