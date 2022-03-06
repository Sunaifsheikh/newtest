const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    price: {
        type: Number,
        validate: {
            validator: (val) => {
                return val > 0;
            },
            message: "Price is not less than 0"
        }
    },
    ratings: Number,
    inStock: Boolean,
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;