import CSS3Icon from '@/assets/svgr/CSS3Icon';
import CSharpIcon from '@/assets/svgr/CSharpIcon';
import ChakraUIIcon from '@/assets/svgr/ChakraUIIcon';
import CypressIcon from '@/assets/svgr/CypressIcon';
import DockerIcon from '@/assets/svgr/DockerIcon';
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
import TypeScriptIcon from '@/assets/svgr/TypescriptIcon';
import { ReactNode } from 'react';

type Technology = {
	icon: ReactNode;
	bgColor: string;
};

export const technologies: { [key: string]: Technology } = {
	'JavaScript': {
		icon: <JavaScriptIcon />,
		bgColor: 'bg-amber-400/20',
	},
	'TypeScript': {
		icon: <TypeScriptIcon />,
		bgColor: 'bg-sky-500/20',
	},
	'C#': {
		icon: <CSharpIcon />,
		bgColor: 'bg-purple-500/20',
	},
	'HTML': {
		icon: <HTML5Icon />,
		bgColor: 'bg-orange-500/20',
	},
	'CSS': {
		icon: <CSS3Icon />,
		bgColor: 'bg-cyan-500/20',
	},
	'React': {
		icon: <ReactIcon />,
		bgColor: 'bg-cyan-500/20',
	},
	'Redux': {
		icon: <ReduxIcon />,
		bgColor: 'bg-purple-500/20',
	},
	'MUI': {
		icon: <MUIIcon />,
		bgColor: 'bg-sky-500/20',
	},
	'Chakra UI': {
		icon: <ChakraUIIcon />,
		bgColor: 'bg-teal-500/20',
	},
	'Tailwind CSS': {
		icon: <TailwindIcon />,
		bgColor: 'bg-sky-500/20',
	},
	'Next.js': {
		icon: <NextjsIcon />,
		bgColor: 'bg-gray-400/20',
	},
	'Firebase': {
		icon: <FirebaseIcon />,
		bgColor: 'bg-amber-500/20',
	},
	'Supabase': {
		icon: <SupabaseIcon />,
		bgColor: 'bg-emerald-500/20',
	},
	'Cypress': {
		icon: <CypressIcon />,
		bgColor: 'bg-cyan-500/20',
	},
	'Prisma': {
		icon: <PrismaIcon />,
		bgColor: 'bg-gray-400/20',
	},
	'Docker': {
		icon: <DockerIcon />,
		bgColor: 'bg-sky-500/20',
	},
};
