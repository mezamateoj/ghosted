import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { hr } from 'date-fns/locale';
import Link from 'next/link';

export default function CardJobCreation({
	description,
	type,
	btnText,
	onClick,
	href,
}: {
	description: string;
	type: string;
	btnText: string;
	onClick?: () => void;
	href?: string;
}) {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Create job</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			{type !== 'manual' && (
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								{/* <Label htmlFor="name">URL</Label>
								<Input id="name" placeholder="Paste job URL" /> */}
								<h1 className="font-bold text-xl">
									Currently under development 🏗️ 🚧
								</h1>
							</div>
						</div>
					</form>
				</CardContent>
			)}
			<CardFooter className="flex justify-between">
				{href && !onClick ? (
					<Link
						className="flex items-center justify-center"
						href={href}
					>
						<Button className="text-center mt-5 ml-8">
							{btnText}
						</Button>
					</Link>
				) : (
					<Button onClick={onClick}>{btnText}</Button>
				)}
			</CardFooter>
		</Card>
	);
}
