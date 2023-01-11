import express from 'express'

import {
    createHotel,
    getAllHotels,
    getHotel,
    updateHotel,
    deleteHotel
} from '../controllers/hotels.js';

const router = express.Router();
import{
    verifyToken,
    checkAdmin
} from '../utils/verifyToken.js';

router.use(verifyToken);

// CREATE
router.post('/', checkAdmin, createHotel)

// READ
router.get('/:id', getHotel)

// READ ALL
router.get('/', getAllHotels)

// UPDATE
router.put('/:id', checkAdmin, updateHotel)

// DELETE
router.delete("/:id", checkAdmin, deleteHotel)

export default router;
