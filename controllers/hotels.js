import Hotel from '../models/Hotel.js'
import createError from '../utils/error.js'

// Create
export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
}

// Read
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err)
    }
}

// Read All
export const getAllHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err)
    }
}

// Update
export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err)
    }
}

// Delete
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted Successfully");
    } catch (err) {
        next(err)
    }
}

// Count Hotels
export const countHotel = async(req, res, next) => {
    const cities = req.query.cities.split(',');
    try{
         const list = await Promise.all(cities.map(async (cityName)=>{
            // const count = 
            return {
                city: cityName, 
                cityCount: await Hotel.countDocuments({city: cityName})
            };
         }))
         res.status(200).json(list);
    } catch(err) {
        next(err)
    }
}