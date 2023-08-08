import { ReactNode } from 'react';

export type Technology = {
	color: string;
	bgColor: string;
	icon?: ReactNode;
};

export type PersonalProject = {
	name: string;
	description: string;
	stack: string[];
	images: string[];
	githubLink?: string;
	previewLink?: string;
};
