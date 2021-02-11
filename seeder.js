const mongoose = require("mongoose");
const Animal= require('./models/animalModel')

mongoose.connect('mongodb://localhost/Zoo', {useNewUrlParser: true, useUnifiedTopology: true});

async function addAnimal (){
const cat = new Animal({
    name: 'Cat',
    desc: 'Very good cat'
})
await cat.save()
const dog = new Animal({
    name: 'Dog',
    desc: 'Very good boy'
})
await dog.save()
mongoose.disconnect();
}
addAnimal ()