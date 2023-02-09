import login from '../models/login.js';

export const loginCreate = async (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;

    const newLogin = await new login({name, email, password, isAdmin});
    newLogin.save();
    
    res.status(201).json(newLogin);
}
