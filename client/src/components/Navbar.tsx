import Link from 'next/link';
import React from 'react';

export default function Navbar() {
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
					<Link href={'/stats'} className="hover:text-sky-500 px-3">
						Stats
					</Link>
				</ul>
				<div className="hidden sm:block border-2 h-6"></div>
				<div className="ml-2 gap-2">
					<button className="hidden sm:inline-block rounded-md hover:text-sky-500 duration-200  text-slate-200 p-2">
						Sign in
					</button>
					<button className="hidden sm:inline-block rounded-md p-2 border-2 hover:bg-white hover:text-black duration-200">
						Sign up
					</button>
				</div>
			</nav>
		</header>
	);
}
