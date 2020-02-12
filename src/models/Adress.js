const mongoose = require('mongoose');

const AdressSchema = new mongoose.Schema({

  name: { type: String, required: true },
  cep: { type: Number, required: true },
  created: { type: Date, required: true },
  updated: { type: Date },
});

module.exports = new mongoose.model('Adress', AdressSchema);
