import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { IBM_Plex_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import { Providers } from '@/components/Provider';
import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs';
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
			<html lang="en">
				<body
					className={`${ibmPlexMono.className} grid grid-rows-[auto_1fr_auto] h-screen`}
				>
					<Navbar />
					<Providers>{children}</Providers>
					<Footer />
					<Toaster position="top-center" />
				</body>
			</html>
		</ClerkProvider>
	);
}
