import { Loader2 } from 'lucide-react';
import React from 'react';

export default function Loading() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Loader2 className="animate-spin h-1.5/6 w-1.5/6 text-orange-600" />
		</div>
	);
}
