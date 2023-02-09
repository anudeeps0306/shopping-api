import mongoose from "mongoose";

const connectMongodb = async (req,res,next) => {
    await mongoose.connect('mongodb+srv://anudeep:1234@cluster0.dvbq9n0.mongodb.net/shop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },() =>{
    console.log('Connected to database'));
    next();
}};

export default connectMongodb;
