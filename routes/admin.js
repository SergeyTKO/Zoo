const router = require('express').Router()
const Animal = require('../models/animalModel')
const Tariff = require('../models/tariffModel')

router.post('/animal', async function(req,res){
    const {animalName, desc} = req.body
    console.log('body',req.body)
    const animal = new Animal({
        name: animalName,
        desc
    })
    await animal.save()
    console.log('animal', animal)
    res.redirect('/admin')
})

router.post('/tariff', async function(req,res){
    const {tariffName, price} = req.body
    await Tariff.create({
            name: tariffName,
            price
        })
    
    res.redirect('/admin')
})

router.put('/animal/:id', async function(req,res){
    const animal = await Animal.findById(req.params.id)
    res.render('admin/animalEdit', {animal})
})

router.get('/animal/:id', async function(req,res){
    await Animal.deleteOne({_id: req.params.id})
    res.redirect('/admin')
})

router.get('/tariff/:id', async function(req,res){
    await Tariff.deleteOne({_id: req.params.id})
    res.redirect('/admin')
})

module.exports = router