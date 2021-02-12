const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const hbs = require('hbs')
const methodOverride = require('method-override')
const dotenv = require('dotenv').config()



const { routesConfig } = require('./middleware/routesConfig');

mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.ozvba.mongodb.net/test`, {useNewUrlParser: true, useUnifiedTopology: true});


const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials('./views/partials')
app.use(express.static( "public"));
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cookieParser())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

routesConfig(app)


module.exports = app
