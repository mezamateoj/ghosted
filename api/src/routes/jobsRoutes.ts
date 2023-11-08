import express from 'express';
import { createJob, getAllJobs } from '../controllers/jobsControllers';

const router = express.Router();

router.route('/:clerkId/create').post(createJob);
router.route('/:clerkId/all').get(getAllJobs);

export default router;
