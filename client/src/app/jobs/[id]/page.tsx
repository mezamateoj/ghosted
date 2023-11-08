import { getJobById } from '@/app/lib/actions';
import Back from '@/components/Back';
import { JobEdit } from '@/components/JobEdit';
import { Separator } from '@/components/ui/separator';

import React from 'react';

export default async function page({ params }: { params: { id: string } }) {
	const data = await getJobById(params.id);
	const job = data[0];

	return (
		<div>
			<div className="px-6 py-5">
				<Back />
			</div>
			<div className="flex items-center mt-5 px-6 py-5 flex-col max-w-4xl ml-auto mr-auto">
				<div>
					<h1 className="text-2xl font-bold">{job.title}</h1>
				</div>
				<Separator className="my-5" />
				<div className="flex h-5 items-center space-x-4 text-sm">
					<p>{job.company}</p>
					<Separator orientation="vertical" />
					<p>{job.status}</p>
					<Separator orientation="vertical" />
					<p className="truncate max-w-[230px]">{job.url}</p>
				</div>
				<div className="mt-5">
					<p>{job.description || 'Add a comment to the job...'}</p>
				</div>
				<JobEdit id={params.id} />
			</div>
		</div>
	);
}
