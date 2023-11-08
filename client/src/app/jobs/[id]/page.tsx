import { getJobById } from '@/app/lib/actions';
import React from 'react';

export default async function page({ params }: { params: { id: string } }) {
	const data = await getJobById(params.id);
	const job = data[0];

	return (
		<div className="flex items-center mt-10 px-6 py-5 flex-col">
			<div>
				<h1 className="text-2xl font-bold">{job.title}</h1>
			</div>
			<div className="flex items-center gap-3">
				<p>Company: {job.company}</p>
				<p>Job Status: {job.status}</p>
			</div>
			<div>
				<p className="truncate max-w-[200px]">{job.url}</p>
			</div>
		</div>
	);
}
