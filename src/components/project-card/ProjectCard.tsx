import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Tooltip from '../ui/custom-tooltip';
import { PersonalProject } from '@/types';
import { technologies } from '@/data/technologies';
import Carousel from '../ui/carousel';

type Props = {
	project: PersonalProject;
};

const ProjectCard = ({ project }: Props) => {
	return (
		<Card className="flex flex-col w-full max-w-full rounded-xl bg-slate-950/50 border-slate-800">
			<CardHeader className="p-0 rounded-t-xl overflow-hidden aspect-[2/1]">
				<Carousel images={project.images} imgWidth={1000} imgHeight={500}></Carousel>
			</CardHeader>
			<CardContent className='pt-8'>
				<CardTitle className="text-slate-200">{project.name}</CardTitle>
				<CardDescription className="mt-4 text-slate-400">{project.description}</CardDescription>
				<div className="inline-flex flex-wrap gap-1 mt-4">
					{project.stack.map(
						x =>
							Boolean(technologies[x]) && (
								<span key={x} className={`${technologies[x].bgColor} ${technologies[x].color} text-xs p-1 rounded-md`}>
									{x}
								</span>
							)
					)}
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-2 mt-auto">
				{project.githubLink && (
					<Tooltip title="View source code">
						<a href={project.githubLink} target="_blank">
							<Button variant="ghost" size="icon" className="hover:bg-violet-800/20" tabIndex={-1}>
								<Github className="text-violet-400" />
							</Button>
						</a>
					</Tooltip>
				)}

				{project.previewLink && (
					<Tooltip title="View live preview">
						<a href={project.previewLink} target="_blank">
							<Button variant="ghost" size="icon" className="hover:bg-violet-800/20" tabIndex={-1}>
								<ExternalLink className="text-violet-400" />
							</Button>
						</a>
					</Tooltip>
				)}
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
