import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen pb-20 min-w-screen">
			<Hero />
			<Projects />
			<Technologies />
		</main>
	);
}
