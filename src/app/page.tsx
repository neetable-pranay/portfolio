import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<main className="min-h-screen min-w-screen flex flex-col pb-20">
			<Hero />
			<About />
			<Projects />
		</main>
	);
}
