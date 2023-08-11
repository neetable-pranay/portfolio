import { mainTechnologies, technologies } from '@/data/technologies';
import Subtitle from './Subtitle';

const About = () => {
	return (
		<section className="w-full px-4 my-16">
			<div className="mx-auto max-w-screen-xl w-full ">
				<Subtitle text="Technologies I know" />
				<div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
					{mainTechnologies.map(
						x =>
							Boolean(technologies[x]) && (
								<div key={x} className="flex items-center gap-4 p-3 rounded-md bg-gradient-to-r from-slate-800 to-purple-900/10">
									<span className={`[&>svg]:w-5 p-2 rounded-lg ${technologies[x].bgColor}`}>{technologies[x].icon}</span>
									<span className="text-slate-200 text-md">{x}</span>
								</div>
							)
					)}
				phs</div>
			</div>
		</section>
	);
};

export default About;
