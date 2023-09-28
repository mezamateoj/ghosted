import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function Home() {
	return (
		<div className="flex mt-5 items-center flex-col">
			<h1 className="font-bold text-4xl">Ghosted</h1>
		</div>
	);
}
