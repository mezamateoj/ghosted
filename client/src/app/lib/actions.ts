'use server';

import { revalidatePath } from 'next/cache';
import { Job, jobForm } from './definitions';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

export async function goTo(id: string) {
	redirect(`/jobs/${id}`);
}

export async function getJobsData(): Promise<Job[]> {
	const { userId } = auth();
	// Fetch data from your API here.
	const res = await fetch(`http://localhost:3001/api/jobs/${userId}/all`);

	if (!res.ok) {
		throw new Error('Failed to fetch jobs');
	}
	return res.json();
}

export async function createJob(values: jobForm) {
	const { userId } = auth();

	if (userId) {
		await fetch(`http://localhost:3001/api/jobs/${userId}/create`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} else {
		return {
			message: 'Something went wrong, failed to create job.',
		};
	}

	// revalidatePath('/jobs');
	redirect('/jobs');
}

// DELETE /api/jobs/:id/delete
export async function deleteJob(id: string) {
	const { userId } = auth();

	if (userId) {
		await fetch(`http://localhost:3001/api/jobs/${id}/delete`, {
			method: 'DELETE',
			body: JSON.stringify({ clerkId: userId }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} else {
		return {
			message: 'Something went wrong, failed to delete job.',
		};
	}

	revalidatePath('/jobs');
}

// GET /api/jobs/:clerkId/:id
export async function getJobById(id: string): Promise<Job[]> {
	const { userId } = auth();

	const res = await fetch(`http://localhost:3001/api/jobs/${userId}/${id}`);

	if (!res.ok) {
		throw new Error('Failed to fetch job');
	}

	return res.json();
}

interface updateStatus {
	status: string;
	url: string;
	description: string;
}

// PUT /api/jobs/update/:clerkId/:id
export async function updateJob(id: string, values: updateStatus) {
	const { userId } = auth();
	const res = await fetch(
		`http://localhost:3001/api/jobs/update/${userId}/${id}`,
		{
			method: 'PUT',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	if (!res.ok) {
		throw new Error('Failed to update job');
	}

	redirect('/jobs');
}
