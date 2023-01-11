import express from 'express'

import {
    createHotel,
    getAllHotels,
    getHotel,
    updateHotel,
    deleteHotel,
    countHotel
} from '../controllers/hotels.js';

const router = express.Router();
import{
    verifyToken,
    checkAdmin
} from '../utils/verifyToken.js';

router.use(verifyToken);

// CREATE
router.post('/', checkAdmin, createHotel);

// READ
router.get('/find/:id', getHotel);

// READ ALL
router.get('/', getAllHotels);

// UPDATE
router.put('/:id', checkAdmin, updateHotel);

// DELETE
router.delete("/:id", checkAdmin, deleteHotel);

// COUNT BY CITY
router.get('/CountHotel', countHotel);

export default router;
