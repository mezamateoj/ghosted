import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
	const date = new Date(input);
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
}

export const statuses = [
	{
		value: 'APPLIED',
		label: 'Applied',
	},
	{
		value: 'INTERVIEW',
		label: 'Interview',
	},
	{
		value: 'REJECTED',
		label: 'Rejected',
	},
	{
		value: 'GHOSTED',
		label: 'Ghosted',
	},
	{
		value: 'OFFER',
		label: 'Offer',
	},
	{
		value: 'READY',
		label: 'Ready to applied',
	},
];
