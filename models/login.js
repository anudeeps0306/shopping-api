import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    isAdmin : Boolean,
})

const  loginCreate = mongoose.model(' loginCreate', loginSchema);

export default loginCreate;