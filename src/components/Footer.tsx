import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
	return (
		<footer className="flex px-5 pt-16 pb-32 bg-slate-950">
			<div className="w-full max-w-screen-xl mx-auto text-sm text-center text-slate-500">
				<div className="gap-4 mb-4">
					<a href="https://www.linkedin.com/in/pranay-yeshaiah-830330119/" target="_blank" className="mr-4">
						<Button size="icon" tabIndex={-1}>
							<Linkedin />
						</Button>
					</a>
					<a href="https://github.com/Pranayyeshaiah97" target="_blank">
						<Button size="icon" tabIndex={-1}>
							<Github />
						</Button>
					</a>
				</div>
				Made with Next.js
			</div>
		</footer>
	);
};

export default Footer;
