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
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import SelectFormItem from './SelectFormItem';

const formSchema = z.object({
	url: z.string().url().optional(),
	status: z.string().min(2, { message: 'Please select a status' }),
	description: z.string(),
});

export function JobEdit({ id }: { id: string }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			url: '',
			status: '',
			description: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		updateJob(id, values);
		toast.success('Job updated!');
		form.reset();
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
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col space-y-3 justify-center"
					>
						<FormField
							control={form.control}
							name="url"
							render={({ field }) => (
								<FormItem className="">
									<FormLabel className="text-right">
										Job URL
									</FormLabel>
									<FormControl>
										<Input
											className="col-span-3"
											placeholder="https://www.google.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="">
							<FormField
								control={form.control}
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">
											Application Status
										</FormLabel>
										<SelectFormItem field={field} />
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem className="">
										<FormLabel className="">
											Description
										</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter>
							<Button className="mt-1" type="submit">
								Save changes
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
