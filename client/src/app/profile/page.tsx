'use client';
import React from 'react';
import { toast } from 'sonner';

export default function page() {
	return (
		<div>
			<button onClick={() => toast('test toast')}>Toast</button>
		</div>
	);
}
