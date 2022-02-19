const mongoose = require('mongoose');

const Sample = mongoose.Schema({

    _id: Number

});
module.exports = mongoose.model('Sample', Sample);