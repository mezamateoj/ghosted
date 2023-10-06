import Link from 'next/link';
import React from 'react';

export default function ClerkButtons() {
	return (
		<>
			<div className="hidden sm:block border-2 h-6"></div>
			<div className="ml-2 gap-2">
				<Link href={'/sign-in'}>
					<button className="hidden sm:inline-block rounded-md hover:text-sky-500 duration-200  text-slate-200 p-2">
						Sign in
					</button>
				</Link>
				<Link href={'/sign-up'}>
					<button className="hidden sm:inline-block rounded-md p-2 border-2 hover:bg-white hover:text-black duration-200">
						Sign up
					</button>
				</Link>
			</div>
		</>
	);
}
