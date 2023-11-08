import { LoaderIcon } from 'lucide-react';
import React from 'react';

export default function loading() {
	return (
		<div className="loading">
			<div className="animate-spin">
				<LoaderIcon size={64} />
			</div>
		</div>
	);
}
