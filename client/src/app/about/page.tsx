import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const page = () => {
	return (
		<div>
			<Alert className="w-3/6 mt-3">
				<Terminal className="h-6 w-6" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using
					the cli.
				</AlertDescription>
			</Alert>
		</div>
	);
};

export default page;
