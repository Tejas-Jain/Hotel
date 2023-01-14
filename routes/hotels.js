import express from 'express'

import {
    createHotel,
    getAllHotels,
    getHotel,
    updateHotel,
    deleteHotel,
    countHotel,
    filterHotel
} from '../controllers/hotels.js';

const router = express.Router();
import{
    verifyToken,
    checkAdmin
} from '../utils/verifyToken.js';

// router.use(verifyToken);

// CREATE
router.post('/', createHotel);




// COUNT BY CITY
router.get('/CountHotel', countHotel);

//Find By City
router.get('/Filter', filterHotel)

// READ
router.get('/:id', getHotel);

// READ ALL
router.get('/', getAllHotels);




// UPDATE
router.put('/:id', checkAdmin, updateHotel);




// DELETE
router.delete("/:id", checkAdmin, deleteHotel);


export default router;
