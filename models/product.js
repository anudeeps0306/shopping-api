import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id : {
        type : String,
        unique : true,
        required : true,
    },
    name : String,
    company : String,
    price : Number,
    colors : [String],
    image : String,
    description : String,
    category : String,
    featured: Boolean,
    shipping: Boolean,
})

const product = mongoose.model('product', productSchema);


export default product;