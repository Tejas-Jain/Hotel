import User from '../models/User.js'
import createError from '../utils/error.js'

// Read
export const getUser = async (req, res, next) => {
    try
    {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (err)
    {
        next(err)
    }
}

// Read All
export const getAllUsers = async (req, res, next) => {
    try
    {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err)
    {
        next(err)
    } 
}

// Update
export const updateUser = async (req, res, next) => {
    try
    {
        const updatedUser = await User.findByIdAndUpdate(req.user.id,
        {
            $set: req.body
        },
        {
            new: true
        });
        res.status(200).json(updatedUser);
    } catch (err)
    {
        next(err)
    }
}

// Delete
export const deleteUser = async (req, res, next) => {
    try
    {
        await User.findByIdAndDelete(req.user.id);
        res.status(200).json("User Deleted Successfully");
    } catch (err)
    {
        next(err)
    }
}

