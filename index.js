import express from 'express';
import cors from 'cors';
import product from './models/product.js';
import postRoute from './router/post.js'
import authRoute from './router/auth.js'
import connectMongodb from './connections/connectMongodb.js'


const app = express();

app.use(express.json());
app.use(cors());
app.use(connectMongodb);

app.get('/home', async (req,res) => {
    res.send('Hello World!');
});
 

app.use('/api/post',postRoute);
app.use('/api/auth',authRoute);


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
    const newProduct = await new product(data);
    newProduct.save();
    res.status(200).send(newProduct);
});



app.listen(8080, () => {
    console.log('Server started on port 8080');
})
