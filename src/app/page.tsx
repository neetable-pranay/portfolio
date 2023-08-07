import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
	return (
		<main className="min-h-screen min-w-screen flex flex-col pb-20">
			<Hero />
			<About />
		</main>
	);
}
