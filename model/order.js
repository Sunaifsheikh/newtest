const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    amount: {
        type: Number,
        validate: {
            validator: (val) => {
                return val > 0;
            },
            message: "Amount is must be greater than 0"
        }
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;