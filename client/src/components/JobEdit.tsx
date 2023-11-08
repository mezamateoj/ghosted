'use client';
import { updateJob } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';
import { Textarea } from './ui/textarea';
import { SelectStatus } from './SelectStatus';

const initialValues = {
	title: '',
	status: '',
	description: '',
};

export function JobEdit({ id }: { id: string }) {
	const [values, setValues] = useState(initialValues);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		updateJob(id, values);
		setValues(initialValues);
		toast.success('Job updated!');
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Edit Job</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Job</DialogTitle>
					<DialogDescription>
						Make changes to the job here. Click save when you are
						done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Title
							</Label>
							<Input
								id="title"
								className="col-span-3"
								value={values.title}
								onChange={(e) =>
									setValues({
										...values,
										title: e.target.value,
									})
								}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="status" className="text-right">
								Status
							</Label>
							<SelectStatus
								onChange={(value: string) =>
									setValues({
										...values,
										status: value,
									})
								}
							/>
						</div>
						<div>
							<Textarea
								onChange={(e) =>
									setValues({
										...values,
										description: e.target.value,
									})
								}
								placeholder="Add a comment for the job."
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
