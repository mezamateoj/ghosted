'use client';
import React from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { FormControl } from '@/components/ui/form';

export default function SelectFormItem({ field }: { field: any }) {
	return (
		<Select onValueChange={field.onChange} defaultValue={field.value}>
			<FormControl>
				<SelectTrigger>
					<SelectValue
						className="text-black"
						placeholder="Select the application status"
					/>
				</SelectTrigger>
			</FormControl>
			<SelectContent>
				<SelectItem value="sent">Sent</SelectItem>
				<SelectItem value="ready">Ready to apply</SelectItem>
				<SelectItem value="applied">Applied</SelectItem>
				<SelectItem value="rejected">Rejected</SelectItem>
			</SelectContent>
		</Select>
	);
}
