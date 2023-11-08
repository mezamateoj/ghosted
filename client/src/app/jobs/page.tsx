import { Job, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Job[]> {
	// Fetch data from your API here.
	const res = await fetch(
		'http://localhost:3001/api/jobs/user_2XsKOHv32DrfNlRjffVXAkDMDfD/all'
	);
	const data = await res.json();
	return data;
}

export default async function DemoPage() {
	const data = await getData();
	return (
		<div className="container mx-auto py-10 w-5/6">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
