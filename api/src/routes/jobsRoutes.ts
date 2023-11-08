import express from 'express';
import {
	createJob,
	deleteJob,
	getAllJobs,
	getJobById,
	updateStatus,
} from '../controllers/jobsControllers';

const router = express.Router();

router.route('/:clerkId/create').post(createJob);
router.route('/:clerkId/all').get(getAllJobs);
router.route('/:id/update').put(updateStatus);
router.route('/:id/delete').delete(deleteJob);
router.route('/:clerkId/:id').get(getJobById);

export default router;
