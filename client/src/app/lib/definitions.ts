// This type is used to define the shape of our data.

export type Job = {
	id: string;
	title: string;
	status:
		| 'APPLIED'
		| 'INTERVIEW'
		| 'REJECTED'
		| 'GHOSTED'
		| 'OFFER'
		| 'READY';
	location: string;
	description: string;
	company: string;
	url: string;
	clerkId: string;
};

export type jobForm = {
	company: string;
	position: string;
	title: string;
	url: string;
	status: string;
};
