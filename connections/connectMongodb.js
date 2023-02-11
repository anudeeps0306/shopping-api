import mongoose from "mongoose";

const connectMongodb = async (req, res, next) => {
    try {
        await mongoose.connect('mongodb+srv://anudeep:1234@cluster0.dvbq9n0.mongodb.net/shop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to database');
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to connect to database');
    }
};

export default connectMongodb;
