import { projects } from '@/data/projects';
import Subtitle from './Subtitle';
import ProjectCard from './project-card/ProjectCard';

const Projects = () => {
	return (
		<section className="w-full px-4 my-16">
			<article className="w-full max-w-screen-xl mx-auto ">
				<Subtitle text="My projects" />
				<span className="block mt-4 text-slate-300">Here are a few things I&apos;ve created. 🧑‍💻</span>
				<div className="grid grid-cols-1 gap-2 mt-8 sm:grid-cols-2">
					{projects.map(x => (
						<ProjectCard key={x.name} project={x} />
					))}
				</div>
			</article>
		</section>
	);
};

export default Projects;
