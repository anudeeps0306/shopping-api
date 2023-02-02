import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import product from './models/product.js';


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://anudeep:1234@cluster0.dvbq9n0.mongodb.net/shop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },() =>{
    console.log('Connected to database');
});

app.get('/api/products', async (req, res) => {
    const data = await product.find({});
    res.status(200).send(data);
});

app.get('/api/insert', async (req, res) => {
    const data = {
        id : "1",
        name : "Nike Slim Shirt",
        company : "Nike",
        price : 120,
        colors : ["red", "black", "blue"],
        image : "/images/p1.jpg",
        description : "high quality product",
        category : "shirts",
        featured: true,
        shipping: true,
    };
    const newProduct = await new product(data);
    newProduct.save();
    res.status(200).send(newProduct);
});



app.listen(8080, () => {
    console.log('Server started on port 8080');
})
