import CSS3Icon from '@/assets/svgr/CSS3Icon';
import CSharpIcon from '@/assets/svgr/CSharpIcon';
import ChakraUIIcon from '@/assets/svgr/ChakraUIIcon';
import CypressIcon from '@/assets/svgr/CypressIcon';
import DockerIcon from '@/assets/svgr/DockerIcon';
import FigmaIcon from '@/assets/svgr/FigmaIcon';
import FirebaseIcon from '@/assets/svgr/FirebaseIcon';
import HTML5Icon from '@/assets/svgr/HTML5Icon';
import JavaScriptIcon from '@/assets/svgr/JavaScriptIcon';
import MUIIcon from '@/assets/svgr/MUIIcon';
import NextjsIcon from '@/assets/svgr/NextjsIcon';
import PrismaIcon from '@/assets/svgr/PrismaIcon';
import ReactIcon from '@/assets/svgr/ReactIcon';
import ReduxIcon from '@/assets/svgr/ReduxIcon';
import SupabaseIcon from '@/assets/svgr/SupabaseIcon';
import TailwindIcon from '@/assets/svgr/TailwindIcon';
import TypeScriptIcon from '@/assets/svgr/TypeScriptIcon';
import { Technology } from '@/types';

export const technologies: { [key: string]: Technology } = {
	'JavaScript': {
		icon: <JavaScriptIcon />,
		bgColor: 'bg-amber-400/20',
		color: 'text-amber-100',
	},
	'TypeScript': {
		icon: <TypeScriptIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'C#': {
		icon: <CSharpIcon />,
		bgColor: 'bg-purple-500/20',
		color: 'text-purple-100',
	},
	'HTML': {
		icon: <HTML5Icon />,
		bgColor: 'bg-orange-500/20',
		color: 'text-orange-100',
	},
	'CSS': {
		icon: <CSS3Icon />,
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'React': {
		icon: <ReactIcon />,
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'Redux Toolkit': {
		icon: <ReduxIcon />,
		bgColor: 'bg-purple-500/20',
		color: 'text-purple-100',
	},
	'MUI': {
		icon: <MUIIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Chakra UI': {
		icon: <ChakraUIIcon />,
		bgColor: 'bg-teal-500/20',
		color: 'text-teal-100',
	},
	'Tailwind CSS': {
		icon: <TailwindIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Next.js': {
		icon: <NextjsIcon />,
		bgColor: 'bg-gray-400/20',
		color: 'text-gray-100',
	},
	'Firebase': {
		icon: <FirebaseIcon />,
		bgColor: 'bg-amber-500/20',
		color: 'text-amber-100',
	},
	'Supabase': {
		icon: <SupabaseIcon />,
		bgColor: 'bg-emerald-500/20',
		color: 'text-emerald-100',
	},
	'Cypress': {
		icon: <CypressIcon />,
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'Prisma': {
		icon: <PrismaIcon />,
		bgColor: 'bg-gray-400/20',
		color: 'text-gray-100',
	},
	'Docker': {
		icon: <DockerIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Figma': {
		icon: <FigmaIcon />,
		bgColor: 'bg-pink-500/20',
		color: 'text-pink-100',
	},
};

export const mainTechnologies = [
	'JavaScript',
	'TypeScript',
	'C#',
	'HTML',
	'CSS',
	'React',
	'Redux Toolkit',
	'MUI',
	'Chakra UI',
	'Tailwind CSS',
	'Next.js',
	'Firebase',
	'Supabase',
	'Cypress',
	'Prisma',
	'Docker',
	'Figma',
];