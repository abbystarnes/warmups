'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const myPublic = __dirname + "/public/";

app.use(express.static(myPublic));

app.get('/index', (req, res) => {
  res.sendFile(path.join(myPublic + "index.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(myPublic + '404.html'));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
