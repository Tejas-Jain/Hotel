import express from 'express'
const router = express.Router();

import {
    createRoom, 
    getRoom,
    getRoomList,
    updateRoom,
    deleteRoom,
    bookRoom
} from '../controllers/rooms.js'

//CREATE
router.post('/:hotelId', createRoom);


//READ
router.get('/:id', getRoom);

router.get('/', getRoomList);
// router.get('/', log1, log2, log3, getRoomList); //Any number of Middleware will work.


//UPDATE
router.put('/:id', updateRoom);
router.put('/book/:id', bookRoom);


//DELETE 
router.delete('/:id/:hotelId', deleteRoom);


//Exporting Routes
export default router;



//Middleware Experimentation Permission
function log1(req, res, next){
    console.log("This is First function");
    next();
}
function log2(req, res, next){
    console.log("This is Second function");
    next();
}
function log3(req, res, next){
    console.log("This is Third function");
    next();
}