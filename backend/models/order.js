const mongoose = require('mongoose');

const Order = mongoose.Schema({

    product: [{
        product: { type: String, required: true },
        price: { type: String, required: true },
    }]




});

module.exports = mongoose.model('Order', Order);
