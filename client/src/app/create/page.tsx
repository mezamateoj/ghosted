'use client';
import CardJobCreation from '@/components/CardJobCreation';
import MagicLink from '@/components/MagicLink';
import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div className="flex flex-col items-center gap-4 py-3">
			<header className="flex flex-col items-center justify-center gap-1">
				<h1 className="text-2xl font-bold">
					Create your job application
				</h1>
				<h3 className="text-2xl font-semibold">Lazy?</h3>

				<p className="mt-3">
					Use the job url and magically create the job
				</p>
				<div className="flex items-center">
					<div className="flex-grow w-[175px]  bg-gray-300 h-0.5"></div>
					<div className="flex-grow-0 mx-5 text-white">or</div>
					<div className="w-[175px] bg-gray-300  h-0.5"></div>
				</div>
				<div>
					<p>Manually create the Job Application</p>
				</div>
			</header>
			<div className="flex gap-5 mt-5 flex-wrap items-center justify-center p-2">
				<CardJobCreation
					description="Create the your new job in one-click."
					type="magic"
					btnText="🪄 Create"
					onClick={() => {
						console.log('click');
					}}
				/>
				<CardJobCreation
					description="Manually create the job application."
					type="manual"
					btnText="📝 Take me to the form"
					href="/create-job"
				/>
			</div>
		</div>
	);
}
