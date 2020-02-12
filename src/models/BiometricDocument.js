const mongoose = require('mongoose');

const BiometricDocumentSchema = new mongoose.Schema({

  name: { type: String, required: true },
  created: { type: Date, required: true },
  updated: { type: Date },
});

module.exports = new mongoose.model('BiometricDocument', BiometricDocumentSchema);
