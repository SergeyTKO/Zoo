const router = require('express').Router();
const loginChecker = require('../middleware/loginChecker')

router.get('/', (req,res)=>{
  res.render('main')
})


router.get('/account', loginChecker, function(req,res){
 
  res.render('account')
})

module.exports = router;
