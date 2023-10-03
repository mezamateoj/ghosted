export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="animate-pulse">
				<div className="w-48 h-48 bg-gray-200 rounded-full"></div>
				<div className="w-64 h-6 mt-4 bg-gray-200 rounded-full"></div>
			</div>
		</div>
	);
}
