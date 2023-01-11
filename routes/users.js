import {
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
} from '../controllers/users.js'
import express from "express";
const router = express.Router();
import {verifyToken,
        checkAdmin
    } from '../utils/verifyToken.js';

router.use(verifyToken);

router.get('/MyAccount', getUser);

router.get('/', checkAdmin ,getAllUsers);

router.put('/UpdateAccount', updateUser);

router.delete('/delete', checkAdmin ,deleteUser);

export default router;