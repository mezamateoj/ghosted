import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/jobs/:userId/all
const getAllJobs = async (req: Request, res: Response) => {
	const { userId } = req.params;
	try {
		const jobs = await prisma.jobs.findMany({
			where: {
				userId: userId,
			},
		});
		res.status(200).json(jobs);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// POST /api/jobs/:userId/create
const createJob = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const { title, description, location, status, company } = req.body;
	try {
		const newJob = await prisma.jobs.create({
			data: {
				title,
				description,
				location,
				status,
				company,
				userId: userId,
			},
		});
		res.status(201).json(newJob);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export { createJob, getAllJobs };
