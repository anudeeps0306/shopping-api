import product from '../models/product.js';
import mongoose from 'mongoose';

export const getPosts = async (req,res) => {
    try{
    const data = await product.find({});
    res.status(200).send(data);
    }catch(err){
        res.status(404).send({message: err.message});
    }
}
