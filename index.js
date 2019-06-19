'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Running at port ${listener.address().port}`);
});

module.exports = app;