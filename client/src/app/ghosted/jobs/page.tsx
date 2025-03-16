import { getJobsData } from '../../lib/actions';
import { columns } from './columns';
import { DataTable } from './data-table';

export default async function DemoPage() {
	const data = await getJobsData();
	return (
		<div className="container mx-auto py-10 w-5/6">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
