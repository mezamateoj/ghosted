import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function MagicLink() {
	return (
		<div className="flex justify-center items-center">
			<div className="flex w-full max-w-sm space-x-2 items-center justify-center">
				<Input
					className="text-black"
					type="text"
					placeholder="Paste URL"
				/>
				<Button className="bg-green-500 font-bold" type="submit">
					🪄 <span className="ml-1.5">Create</span>
				</Button>
			</div>
		</div>
	);
}
