const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost/SafariPark', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express()

app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cookieParser())

module.exports = app