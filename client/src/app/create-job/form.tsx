'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

import FormItems from '@/components/FormItems';
import SelectFormItem from '@/components/SelectFormItem';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import FormDatePicker from '@/components/FormDatePicker';

const formSchema = z.object({
	company: z
		.string()
		.min(2, { message: 'Company name must be at least 2 characters long' })
		.regex(/^[ A-Za-z0-9,_@./#&+-]*$/, {
			message: 'Company name must be alphanumeric',
		}),
	position: z
		.string()
		.min(2, { message: 'Position must be at least 2 characters long' })
		.regex(/^[ A-Za-z0-9,_@./#&+-]*$/, {
			message: 'Position must be alphanumeric',
		}),
	title: z.string().min(2, { message: 'Please add the job title' }),
	jobUrl: z.string(),
	status: z.string({ required_error: 'Please select an application status' }),
});

export default function JobForm() {
	// define form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			company: '',
			position: '',
			jobUrl: '',
			title: '',
			status: '',
		},
	});

	// define submit handler
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		// reset form to default values
		toast.success('Job application submitted successfully!');
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-5 text-black sm:w-3/6 px-5"
			>
				<FormField
					control={form.control}
					name="company"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-white">
								Company Name
							</FormLabel>
							<FormControl>
								<Input placeholder="Google" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormItems
					name="title"
					label="Title"
					placeholder="Job title"
					control={form.control}
				/>

				<FormItems
					name="position"
					label="Position"
					placeholder="Job position"
					control={form.control}
				/>

				<FormItems
					name="jobUrl"
					label="Posting URL"
					placeholder="Job URL"
					control={form.control}
				/>
				{/* Select a job type: */}
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
				{/* select date */}
				{/* <FormField
					control={form.control}
					name="date"
					render={({ field }) => (
						<FormItem className="flex flex-col w-4/6">
							<FormLabel className="text-white">
								Date of birth
							</FormLabel>
							<FormDatePicker field={field} />
							<FormMessage />
						</FormItem>
					)}
				/> */}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
