import { getJobById } from '@/app/lib/actions';
import React from 'react';

export default async function page({ params }: { params: { id: string } }) {
	const data = await getJobById(params.id);
	console.log(data);
	return <div>page {params.id}</div>;
}
