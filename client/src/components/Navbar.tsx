'use client';
import Link from 'next/link';
import React from 'react';

import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import ClerkButtons from './ClerkButtons';

export default function Navbar() {
	const { isSignedIn } = useUser();

	return (
		<header className="h-16 sm:h-20 flex justify-between items-center p-4 sm:px-16">
			<Link href={'/'}>
				<p className="text-l sm:text-2xl font-medium">
					<span className="hidden sm:inline-block">👻</span>Ghosted.
				</p>
			</Link>
			<nav className="flex items-center">
				<ul className="flex gap-8 mr-2">
					<Link href={'/jobs'} className="hover:text-sky-500">
						Jobs
					</Link>
					<Link href={'/create-job'} className="hover:text-sky-500">
						Create Job
					</Link>
					<Link href={'/stats'} className="hover:text-sky-500 px-3">
						Stats
					</Link>
				</ul>
				{isSignedIn ? (
					<div className="ml-3">
						<UserButton afterSignOutUrl="/" />
					</div>
				) : (
					<ClerkButtons />
				)}
			</nav>
		</header>
	);
}
