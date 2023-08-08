import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import Tooltip from '../ui/custom-tooltip';
import { PersonalProject } from '@/types';
import { technologies } from '@/data/technologies';
import ChakraUIIcon from '@/assets/svgr/ChakraUIIcon';

type Props = {
	project: PersonalProject;
};

const ProjectCard = ({ project }: Props) => {
	return (
		<Card className="w-full max-w-full rounded-xl bg-slate-950/50 border-slate-800 flex flex-col">
			<CardHeader className="p-0 pb-8">
				<Image src={project.images[0]} width={720} height={480} alt="preview" className="rounded-t-xl" />
			</CardHeader>
			<CardContent>
				<CardTitle className="text-slate-200">{project.name}</CardTitle>
				<CardDescription className="text-slate-400 mt-4">{project.description}</CardDescription>
				<div className="mt-4 inline-flex flex-wrap gap-1">
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
