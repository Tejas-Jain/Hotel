import JWT from "jsonwebtoken";

import createError from './error.js'

export const verifyToken = (req, res, next)=>{

    const token = req.cookies.access_token;

    if(!token) return next(createError(401, "User Not Authenticated!!!"));

    JWT.verify(token, process.env.JWT, (err, user)=>{
        if(err) return next(createError(403, "Token not valid!!!"));
        req.user = user;
        next();
    })
}

export const checkAdmin = (req, res, next)=>{
    if(!req.user.isAdmin)
        next(createError(402, "User not admin"));
    next();
}