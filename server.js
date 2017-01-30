'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')


const messages = require('./routes/classifieds');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/classifieds',messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on http://localhost:'+ port);
});

module.exports = app;
