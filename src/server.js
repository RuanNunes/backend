const app = require('./app');
const path = require('path');
const express = require('express');

app.listen(process.env.PORT || 3000);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
