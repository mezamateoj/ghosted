import MainLanding from '@/components/MainLanding';
import { MoveRight } from 'lucide-react';

export default function Home() {
	return (
		<div className="flex mt-10 items-center flex-col px-5">
			<h1 className="font-bold text-4xl tracking-wider">Ghosted</h1>
			<div className="w-[400px]sm:w-[600px] mt-5 text-center px-5 flex flex-col gap-5 items-center">
				<h2 className="sm:text-2xl font-medium text-slate-300 sm:w-4/6">
					Simplify your job hunt. Stay organized and ahead with
					Ghosted.
				</h2>

				<p className="sm:w-3/6 text-slate-400">
					Ghosted empowers you to keep track, organize and have a
					clear record of every job you apply for.
				</p>

				<button className="flex gap-2 items-center rounded-md bg-red-700 p-2 sm:font-medium">
					Start now <MoveRight size={20} />
				</button>
			</div>
			<MainLanding />
		</div>
	);
}
