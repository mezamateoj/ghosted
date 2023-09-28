import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function Home() {
	return (
		<div className="flex mt-10 items-center flex-col">
			<h1 className="font-bold text-4xl tracking-wider">Ghosted</h1>
			<div className="w-[400px]sm:w-[600px] mt-5 text-center px-5">
				<h2 className="sm:text-2xl font-medium">
					Simplify your job hunt. Stay organized and ahead with
					Ghosted.
				</h2>
			</div>
		</div>
	);
}
