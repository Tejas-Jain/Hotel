import express from "express";
const router = express.Router();

import bcrypt from 'bcryptjs'

import JWT from "jsonwebtoken";

import createError from "../utils/error.js"

import User from '../models/User.js'

router.post('/register', async (req, res, next) => {
    try {   
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username, 
            isAdmin: req.body.isAdmin, 
            email: req.body.email, 
            password: hash
        })

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        next(err);
    }
})

router.post('/login', async(req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user) 
            return next(createError(404, "User Not Found!!!"));
        
        const match = await bcrypt.compareSync(req.body.password, user.password); 
        if (!match) 
            return next(createError(400, "Password Not Correct!!!"));

            
        const token = JWT.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
        const {password, isAdmin, ...rest} = user._doc;
        res
            .cookie('access_token', token,{
                httpOnly: true
            })
            .status(200)
            .json(rest);
        
    } catch(err){
        next(err);
    }
})
export default router;
