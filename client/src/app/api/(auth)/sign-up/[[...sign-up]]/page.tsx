import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="flex justify-center items-center px-1 mb-1">
			<SignUp />
		</div>
	);
}
