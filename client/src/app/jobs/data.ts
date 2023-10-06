interface Payment {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'success' | 'failed';
	email: string;
}

const data: Payment[] = [
	{
		id: '1a2b3c4d',
		amount: 150,
		status: 'pending',
		email: 'a@example.com',
	},
	{
		id: '5e6f7g8h',
		amount: 200,
		status: 'processing',
		email: 'b@example.com',
	},
	{
		id: '9i0j1k2l',
		amount: 75,
		status: 'success',
		email: 'c@example.com',
	},
	{
		id: '3m4n5o6p',
		amount: 50,
		status: 'failed',
		email: 'd@example.com',
	},
	{
		id: '7q8r9s0t',
		amount: 300,
		status: 'pending',
		email: 'e@example.com',
	},
	{
		id: '1u2v3w4x',
		amount: 125,
		status: 'processing',
		email: 'f@example.com',
	},
	{
		id: '5y6z7a8b',
		amount: 80,
		status: 'success',
		email: 'g@example.com',
	},
	{
		id: '9c0d1e2f',
		amount: 60,
		status: 'failed',
		email: 'h@example.com',
	},
	{
		id: '3g4h5i6j',
		amount: 250,
		status: 'pending',
		email: 'i@example.com',
	},
	{
		id: '7k8l9m0n',
		amount: 175,
		status: 'processing',
		email: 'j@example.com',
	},
	{
		id: '1o2p3q4r',
		amount: 90,
		status: 'success',
		email: 'k@example.com',
	},
	{
		id: '5s6t7u8v',
		amount: 70,
		status: 'failed',
		email: 'l@example.com',
	},
	{
		id: '9w0x1y2z',
		amount: 120,
		status: 'pending',
		email: 'm@example.com',
	},
	{
		id: '3a4b5c6d',
		amount: 175,
		status: 'processing',
		email: 'n@example.com',
	},
	{
		id: '7e8f9g0h',
		amount: 80,
		status: 'success',
		email: 'o@example.com',
	},
];

export default data;
