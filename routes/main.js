const router = require('express').Router();
const checker = require('../middleware/checker')

router.get('/', (req,res)=>{
  res.render('main')
})


router.get('/account', checker, function(req,res){
 
  res.render('account')
})

module.exports = router;
