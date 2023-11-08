import { LoaderIcon } from 'lucide-react';
import React from 'react';

export default function loading() {
	return (
		<div className="h-screen mt-9">
			<div className="flex items-center justify-center">
				<LoaderIcon size={64} className="animate-spin" />
			</div>
		</div>
	);
}
