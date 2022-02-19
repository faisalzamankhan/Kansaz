const mongoose = require('mongoose');

const Product = mongoose.Schema({


    Title: { type: String, required: true },
    Price: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },

});

module.exports = mongoose.model('Product', Product);
