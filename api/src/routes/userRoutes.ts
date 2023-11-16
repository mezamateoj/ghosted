import express from 'express';
import { getAllUsers, createUser } from '../controllers/userControllers';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

// router.route('/:id').delete(deleteUser);

export default router;
