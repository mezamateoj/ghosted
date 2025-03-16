

import { Toaster } from 'sonner';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
	<SidebarProvider>
		<AppSidebar />
		<main className='w-full'>
		<SidebarTrigger />
			{children}
			<Toaster position="top-center" />
		</main>
	</SidebarProvider>
	);
}
