import { PersonalProject } from '@/types';

export const projects: PersonalProject[] = [
	{
		name: 'BGR Mining and Infra Limited',
		description:
			'BGR Mining and Infra Limited, a prominent player in the mining industry specializing in coal extraction and transportation, ur system leverages cutting-edge GPS and tracking technology to provide real-time location data for each transport vehicle. This allows BGR Mining and Infra Limited to monitor the movement and status of their entire fleet, To ensure that vehicles stay on their designated routes, we implemented geo-fencing capabilities. If a vehicle deviates from its predetermined route, the system generates an immediate alert, allowing for timely corrective actions.BGR Mining and Infra Limited can now access reports detailing any shortages in transported coal. These reports are generated automatically, helping to minimize losses and enhance accountability.',
		images: [
			'/img/projects/bgr/dashboard.png',
			'/img/projects/bgr/tracker.png',
			'/img/projects/bgr/report.png',
			'/img/projects/bgr/createVehicle.png',
			'/img/projects/bgr/list.png',
		],
		stack: ['React','React Hook Form', 'JavaScript','Bootstrap',  'Redux Toolkit', 'AWS'],
		githubLink: 'https://github.com/m-ler/trivia-time',
		previewLink: 'https://triviatime.vercel.app/',
	},
	{
		name: 'WorldTradeX',
		description: 'WordTradeX is an ongoing project, a dynamic and innovative B2B e-commerce platform designed to revolutionize the way businesses engage in international trade. Just like Alibaba, WordTradeX offers a comprehensive solution for businesses around the world, connecting buyers and sellers through a seamless online marketplace. The project involved the creation of three distinct portals: Buyer, Seller, and Admin, each serving a crucial role in enabling a robust and efficient B2B trading ecosystem.',
		images: [
			'/img/projects/wtx/WTX-buyer-banner.png',
			'/img/projects/wtx/WTX-products.png',
			'/img/projects/wtx/WTX-checkout.png',
		],
		stack: ['Next.js', 'TypeScript', 'AWS', 'Bootstrap', 'Redux Toolkit'],
		previewLink: 'https://buy.dev.worldtradex.com/',
	},
	{
		name: 'Esor',
		description: 'We are Retail Foods, an MSME ( Micro, Small & Medium Enterprise) unit that was started in 2019 with the aim to offer quality food products to discerning consumers. Our products are ethically produced in hygienic conditions, and directly sourced in their freshest form.',
		images: [
			'/img/projects/esor/esor-1.png',
			'/img/projects/esor/esor-2.png',
			'/img/projects/esor/esor-3.png',
			'/img/projects/esor/esor-4.png',
		],
		stack: ['Laravel', 'HTML', 'JavaScript', 'CSS', 'Bootstrap'],
		previewLink: 'https://esor.in/',
	},
	{
		name: 'Video Game Library',
		description:
			'A web app that provides access to a vast library of video games, with information on everything from the latest releases to classic titles. The app uses the RAWG API to deliver accurate and up-to-date data.',
		images: [
			'https://raw.githubusercontent.com/m-ler/video-game-library/main/.github/assets/vgl-banner.png',
			'/img/projects/video-game-library/1.png',
			'/img/projects/video-game-library/2.png',
			'/img/projects/video-game-library/3.png',
			'/img/projects/video-game-library/4.png',
			'/img/projects/video-game-library/5.png',
			'/img/projects/video-game-library/6.png',
			'/img/projects/video-game-library/7.png',
		],
		stack: ['JavaScript', 'React', 'Redux Toolkit', 'Tailwind CSS', 'Firebase'],
		githubLink: 'https://github.com/m-ler/video-game-library',
		previewLink: 'https://vglibrary.web.app/games',
	},
	{
		name: 'YouTube Clone',
		description: 'A Youtube web application clone build with Next.js app directory and powered by the YouTube Data API v3.',
		images: [
			'https://raw.githubusercontent.com/m-ler/youtube-clone/main/public/img/banner.png',
			'/img/projects/youtube-clone/1.png',
			'/img/projects/youtube-clone/2.png',
			'/img/projects/youtube-clone/3.png',
			'/img/projects/youtube-clone/4.png',
			'/img/projects/youtube-clone/5.png',
			'/img/projects/youtube-clone/6.png',
		],
		stack: ['Next.js', 'TypeScript', 'MUI', 'Zustand'],
		githubLink: 'https://github.com/m-ler/youtube-clone',
		previewLink: 'https://youtube-next-js.vercel.app/',
	},
];
