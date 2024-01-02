import express from 'express';
import { getAllCounts } from '../controllers/statsControllers';


const router = express.Router();

router.route('/counts').get(getAllCounts);

export default router;