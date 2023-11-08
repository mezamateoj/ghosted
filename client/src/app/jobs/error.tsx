'use client';

import Back from '@/components/Back';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Optionally log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className="flex h-full flex-col items-center justify-center gap-5">
			<h2 className="text-center">Something went wrong!</h2>

			<Back />
		</main>
	);
}
