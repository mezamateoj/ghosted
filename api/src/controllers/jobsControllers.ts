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

// GET /api/jobs/:userId/:id
const getJobById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { clerkId } = req.params;
	try {
		const jobs = await prisma.jobs.findMany({
			where: {
				clerkId,
				id: parseInt(id),
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
	const { title, description, location, status, company, url } = req.body;
	try {
		const newJob = await prisma.jobs.create({
			data: {
				title,
				description,
				location,
				status,
				company,
				url,
				clerkId,
			},
		});
		res.status(201).json(newJob);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// PUT /api/jobs/update/:clerkId/:id
const updateJob = async (req: Request, res: Response) => {
	const { id, clerkId } = req.params;
	const { status, url, description } = req.body;
	try {
		const job = await prisma.jobs.findFirst({
			where: {
				id: parseInt(id),
				clerkId,
			},
		});

		// Construct the data object conditionally
		const dataToUpdate: { [key: string]: any } = {};

		if (!job)
			throw new Error(
				'Job not found or you are not authorized to update this job'
			);

		if (url !== '') {
			dataToUpdate.url = url;
		}

		if (description !== '') {
			dataToUpdate.description = description;
		}

		if (typeof status !== 'undefined') {
			dataToUpdate.status = status;
		}

		const updatedJob = await prisma.jobs.update({
			where: {
				id: job.id,
			},
			data: {
				...dataToUpdate,
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
	const { clerkId } = req.body;
	try {
		const job = await prisma.jobs.findFirst({
			where: {
				id: parseInt(id),
				clerkId,
			},
		});

		if (!job)
			throw new Error(
				'Job not found or you are not authorized to delete this job'
			);

		if (job) {
			await prisma.jobs.delete({
				where: {
					id: job.id,
				},
			});
		}
		res.status(200).json({ message: 'Job deleted' });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export { createJob, getAllJobs, updateJob, deleteJob, getJobById };
