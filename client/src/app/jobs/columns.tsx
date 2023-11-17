'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import { Job } from '../lib/definitions';
import { deleteJob, goTo } from '../lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// You can use a Zod schema here if you want.

export const columns: ColumnDef<Job>[] = [
	{
		accessorKey: 'id',
		header: 'Job id',
	},
	{
		accessorKey: 'company',
		header: 'Company',
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			return (
				<p
					className={cn('rounded-md text-green-400', {
						'text-red-500': row.getValue('status') === 'REJECTED',
						'text-blue-400': row.getValue('status') === 'READY',
					})}
				>
					{row.getValue('status')}
				</p>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: 'url',
		header: () => <div className="text-center">Job Post URL</div>,
		cell: ({ row }) => {
			return (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={row.getValue('url')}
					className="text-sm truncate max-w-[160px] line-clamp-1 hover:underline cursor-pointer"
				>
					{row.getValue('url')}
				</a>
			);
		},
	},
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Title
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	// {
	// 	accessorKey: 'amount',
	// 	header: () => <div className="text-right">Amount</div>,
	// 	cell: ({ row }) => {
	// 		const amount = parseFloat(row.getValue('amount'));
	// 		const formatted = new Intl.NumberFormat('en-US', {
	// 			style: 'currency',
	// 			currency: 'USD',
	// 		}).format(amount);

	// 		return <div className="text-right font-medium">{formatted}</div>;
	// 	},
	// },
	{
		id: 'actions',
		cell: ({ row }) => {
			const job = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="h-8 w-8 p-0 text-center"
						>
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => {
								goTo(job.id);
							}}
						>
							View Job
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								deleteJob(job.id);
								toast.success('Job deleted successfully!');
							}}
						>
							Delete Job
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
