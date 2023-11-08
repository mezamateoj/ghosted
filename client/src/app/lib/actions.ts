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
	const data = await res.json();
	return data;
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
export async function getJobById(id: string) {
	const { userId } = auth();

	if (userId) {
		const res = await fetch(
			`http://localhost:3001/api/jobs/${userId}/${id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		const data = await res.json();
		return data;
	} else {
		return {
			message: 'Something went wrong, failed to delete job.',
		};
	}
}
