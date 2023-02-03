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

app.post('/api/insert', async (req, res) => {
    const data = {
        id : req.body.id,
        name : req.body.name,
        company : req.body.company,
        price : req.body.price,
        colors : req.body.colors,
        image : req.body.image,
        description : req.body.description,
        category : req.body.category,
        featured: req.body.featured,
        shipping: req.body.shipping,
    }
    console.log(data);
    const newProduct = await new product(data);
    newProduct.save();
    res.status(200).send(newProduct);
});



app.listen(8080, () => {
    console.log('Server started on port 8080');
})
