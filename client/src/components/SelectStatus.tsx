'use client';
import * as React from 'react';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export function SelectStatus({ onChange }: { onChange: any }) {
	return (
		<Select onValueChange={(value) => onChange(value)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select status" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="READY">Ready to applied</SelectItem>
					<SelectItem value="APPLIED">Applied</SelectItem>
					<SelectItem value="INTERVIEW">Interview</SelectItem>
					<SelectItem value="REJECTED">Rejected</SelectItem>
					<SelectItem value="GHOSTED">Ghosted</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
