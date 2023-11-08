import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/jobs/:userId/all
const getAllJobs = async (req: Request, res: Response) => {
	const { clerkId } = req.params;
	try {
		const jobs = await prisma.jobs.findMany({
			where: {
				clerkId,
			},
		});
		res.status(200).json(jobs);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// POST /api/jobs/:userId/create
const createJob = async (req: Request, res: Response) => {
	const { clerkId } = req.params;
	const { title, description, location, status, company } = req.body;
	try {
		const newJob = await prisma.jobs.create({
			data: {
				title,
				description,
				location,
				status,
				company,
				clerkId,
			},
		});
		res.status(201).json(newJob);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// PUT /api/jobs/:id/update
const updateStatus = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { status } = req.body;
	try {
		const updatedJob = await prisma.jobs.update({
			where: {
				id: parseInt(id),
			},
			data: {
				status,
			},
		});
		res.status(200).json(updatedJob);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// DELETE /api/jobs/:id/delete
const deleteJob = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await prisma.jobs.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json({ message: 'Job deleted' });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export { createJob, getAllJobs, updateStatus, deleteJob };
