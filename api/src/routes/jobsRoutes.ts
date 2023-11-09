import express from 'express';
import {
	createJob,
	deleteJob,
	getAllJobs,
	getJobById,
	updateJob,
} from '../controllers/jobsControllers';

const router = express.Router();

router.route('/:clerkId/create').post(createJob);
router.route('/:clerkId/all').get(getAllJobs);
router.route('/update/:clerkId/:id').put(updateJob);
router.route('/:id/delete').delete(deleteJob);
router.route('/:clerkId/:id').get(getJobById);

export default router;
