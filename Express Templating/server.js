'use strict';
const routes = require("route");
const express = require("express");
///
const app = express();
///
const path = require("path");
const fs = require("fs");
const http = require('http');
const port = process.env.PORT || 3000;
////
let pokemon = require('./pokemon_list');
console.log(pokemon);


const bodyParser = require('body-parser');
const morgan = require('morgan');

app.disable('x-powered-by');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/pokemon', (req, res) => {
  res.render('index', {
    pokemon,
  })
})

app.get('/pokemon/:id', (req, res) => {
  let id = req.params.id;
  res.render('profile', {
    pokemon: pokemon[id - 1],
  })
})

app.use(function(_req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app
