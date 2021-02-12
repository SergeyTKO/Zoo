const router = require('express').Router()
const cookieCleaner = require('../middleware/cookieCleaner')

router.get('/', cookieCleaner, function(req,res){
    res.redirect('/login')
})

module.exports = router
