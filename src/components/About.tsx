import { mainTechnologies, technologies } from '@/data/technologies';
import Subtitle from './Subtitle';

const About = () => {
	return (
		<section className="w-full px-4 my-16">
			<div className="mx-auto max-w-screen-xl w-full ">
				<Subtitle text="About me" />
				<p className="text-slate-400 text-md mb-6 mt-4 text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum iure cumque sed unde repudiandae, dolor odit error quibusdam
					ullam nostrum rem eius at. Mollitia fugit veritatis cumque velit, inventore voluptates. Quisquam animi nihil sapiente
					reprehenderit! Qui blanditiis quas porro officia commodi voluptatem hic? Itaque ut harum molestias nostrum molestiae deserunt.
				</p>

				<h4 className="text-slate-300 font-semibold text-lg mb-5">Technologies</h4>

				<div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{mainTechnologies.map(
						x =>
							Boolean(technologies[x]) && (
								<div key={x} className="flex items-center gap-4 p-3 rounded-md bg-gradient-to-r from-slate-800 to-purple-900/10">
									<span className={`[&>svg]:w-5 p-2 rounded-lg ${technologies[x].bgColor}`}>{technologies[x].icon}</span>
									<span className="text-slate-200 text-md">{x}</span>
								</div>
							)
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
