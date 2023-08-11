import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700', '800'] });

export const metadata: Metadata = {
	title: 'Miguel Lerma | Web developer',
	description: "Mler's developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${notoSansMono.className} min-w-[380px] bg-slate-900`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
