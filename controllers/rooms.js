import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'
import createError from '../utils/error.js'


//CREATE
export const createRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save();

        await Hotel.findByIdAndUpdate(hotelId, {
            $push: {rooms: savedRoom._id}
        });
        res.status(200).json(savedRoom);
    } catch(err) {
        next(err);
    }
}

//READ
export const getRoom = async(req, res, next) => {
    try{
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch(err) {
        next(err);
    }
}

export const getRoomList = async(req, res, next)=>{
    console.log("Inside the Room List");
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms)
    } catch(err) {
        next(err);
    }
}


//UPDATE
export const updateRoom = async(req, res, next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(updatedRoom);
    } catch(err) {
        next(err);
    }
}

export const bookRoom = async(req, res, next)=>{
    try{
        const updatedRoom = await Room.updateMany(
            {"roomNumbers._id": req.params.id}, 
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            },
            {new: true}
        );
        res.status(200).json("Room Booked Successfully!!!");
    } catch(err) {
        next(err);
    }
}

//DELETE
export const deleteRoom = async(req, res, next) =>{
    const hotelId = req.params.hotelId;
    try{
        const updatedHotelRoomList = await Hotel.findByIdAndUpdate(hotelId, 
            {$pull: {rooms: req.params.id}},
            {new: true}
        );
        await  Room.findByIdAndDelete(req.params.id);
        res.status(200).json(updatedHotelRoomList);
    } catch(err) {
        next(err);
    }
}