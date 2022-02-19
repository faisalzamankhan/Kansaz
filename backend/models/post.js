const mongoose = require('mongoose');

const DataModel = mongoose.Schema({


  Name: { type: String, required: true },
  Date: { type: String, required: true },
  Delivered: { type: String, required: true },
  EmptyRecived: { type: String, required: true },
  Balanced: { type: String, required: true },
  CashRecived: { type: String, required: true },
  CashBalanced: { type: String, required: true }

});

module.exports = mongoose.model('DataModel', DataModel);
