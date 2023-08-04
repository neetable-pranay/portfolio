import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Miguel | Porfolio',
	description: "Mler's developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${ubuntu.className} min-w-[380px] bg-slate-900`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
