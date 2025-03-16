import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

import { IBM_Plex_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
// const inter = Inter({ subsets: ['latin'] });
const ibmPlexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Ghosted',
	description: 'Minimalist job application tracker',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${ibmPlexMono.className}`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						disableTransitionOnChange
					>
						<main className='w-full'>
				
							{children}
							<Toaster position="top-center" />
						</main>
						
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
