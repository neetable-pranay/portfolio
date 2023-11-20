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
	},
	{
		name: 'Equidefi',
		description:
			'Equidefi is a groundbreaking software streamlining private offerings. My primary contribution focused on crafting the Investor Portal, a user-centric interface allowing seamless exploration and investment in diverse opportunities. Notably, I integrated Stripe payment functionality, ensuring secure and efficient transactions. The Investor Portal empowers users with transparent insights into offerings, fostering informed investment decisions. This platform not only revolutionizes private offering accessibility for investors but also equips issuers with tools for efficient creation and management. ',
		images: [
			'/img/projects/equidefi/equidefi1.png',
			'/img/projects/equidefi/equidefi2.png',
			'/img/projects/equidefi/equidefi3.png',
		],
		stack: ['React', 'JavaScript', 'Redux Toolkit','Bootstrap','AWS'],
		previewLink: 'https://equidefi.com/',
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
		description: 'Esor is a Retail Foods, an MSME ( Micro, Small & Medium Enterprise) unit that has started in 2019, this project helps esor to showcase their products and allow the end users to buy the product.',
		images: [
			'/img/projects/esor/esor-1.png',
			'/img/projects/esor/esor-2.png',
			'/img/projects/esor/esor-3.png',
			'/img/projects/esor/esor-4.png',
		],
		stack: ['Laravel', 'HTML', 'JavaScript', 'CSS', 'Bootstrap'],
		previewLink: 'https://esor.in/',
	}
];
