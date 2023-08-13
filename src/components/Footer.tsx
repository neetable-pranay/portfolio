import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
	return (
		<footer className="flex px-5 pt-16 pb-32 bg-slate-950">
			<div className="max-w-screen-xl mx-auto w-full text-slate-500 text-sm text-center">
				<div className="mb-4  gap-4">
					<a href="https://linkedin.com/" target="_blank" className="mr-4">
						<Button size="icon" tabIndex={-1}>
							<Linkedin />
						</Button>
					</a>
					<a href="https://github.com/m-ler" target="_blank">
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
