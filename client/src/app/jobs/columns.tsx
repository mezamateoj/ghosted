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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Job = {
	id: string;
	title: string;
	status:
		| 'APPLIED'
		| 'INTERVIEW'
		| 'REJECTED'
		| 'GHOSTED'
		| 'OFFER'
		| 'READY';
	location: string;
	description: string;
	company: string;
	url: string;
	clerkId: string;
};

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
	},
	{
		accessorKey: 'url',
		header: 'Url',
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
			const payment = row.original;

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
								navigator.clipboard.writeText(payment.id);
								toast.success('Copied payment ID to clipboard');
							}}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>
							View payment details
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
