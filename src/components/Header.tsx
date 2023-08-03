import { Camera, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
	return (
		<header className="bg-slate-900/80 backdrop-blur-md flex fixed left-0 top-0 right-0 z-10 px-4 py-4 ">
			<div className="flex items-center mx-auto max-w-screen-xl w-full gap-4">
				<span className="text-base text-slate-200 font-black">mler.dev</span>
				<nav className="ml-auto flex gap-2">
					<a href="https://www.linkedin.com/" target="_blank" title="LinkedIn">
						<Button variant="ghost" size="icon" className="hover:bg-slate-800">
							<Linkedin className="text-slate-300" />
						</Button>
					</a>

					<a href="https://github.com/m-ler" target="_blank" title="Github">
						<Button variant="ghost" size="icon" className="hover:bg-slate-800">
							<Github className="text-slate-300" />
						</Button>
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
