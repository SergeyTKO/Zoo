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
    res.redirect(`/${animal._id}`)
})

router.post('/tariff', async function(req,res){
    const {tariffName, price} = req.body
    const foundTariff = await Tariff.findOne({name:tariffName.toLowerCase()})
    if(foundTariff){
        await Tariff.updateOne({name:tariffName.toLowerCase()}, {price})
    }else{
        await Tariff.create({
            name: tariffName.toLowerCase(),
            price
        })
    }
    res.redirect('/')
})

module.exports = router