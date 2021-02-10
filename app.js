const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const hbs = require('hbs')

mongoose.connect('mongodb://localhost/SafariPark', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials('./views/partials')

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cookieParser())

module.exports = app