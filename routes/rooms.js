import express from 'express'
const router = express.Router();

import {
    createRoom, 
    getRoom,
    getRoomList,
    updateRoom,
    deleteRoom
} from '../controllers/rooms.js'

router.post('/:hotelId', createRoom);

router.get('/:id', getRoom);

router.get('/', getRoomList);
// router.get('/', log1, log2, log3, getRoomList); //Any number of Middleware will work.

router.put('/:id', updateRoom);

router.delete('/:id/:hotelId', deleteRoom);


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
export default router;