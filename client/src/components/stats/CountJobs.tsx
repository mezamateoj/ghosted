import { Card, Text, Metric } from '@tremor/react';

export default function CountJobs({
	text,
	metric,
}: {
	text: string;
	metric: string;
}) {
	return (
		<Card className="mx-auto w-3/6">
			<Text>{text}</Text>
			<Metric>{metric}</Metric>
		</Card>
	);
}
