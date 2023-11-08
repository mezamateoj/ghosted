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
				<SelectItem value="READY">Ready to applied</SelectItem>
				<SelectItem value="APPLIED">Applied</SelectItem>
				<SelectItem value="INTERVIEW">Interview</SelectItem>
				<SelectItem value="REJECTED">Rejected</SelectItem>
				<SelectItem value="GHOSTED">Ghosted</SelectItem>
			</SelectContent>
		</Select>
	);
}
