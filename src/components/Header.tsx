import { Camera, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Tooltip from './ui/custom-tooltip';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-10 flex px-4 py-4 bg-slate-900/80 backdrop-blur-md ">
			<div className="flex items-center w-full max-w-screen-xl gap-4 mx-auto">
				<span className="text-base font-black text-slate-200">mler.dev</span>
				<nav className="flex gap-2 ml-auto">
					<Tooltip title="My LinkedIn">
						<a href="https://www.linkedin.com/in/pranay-yeshaiah-830330119/" target="_blank">
							<Button variant="ghost" size="icon" className="hover:bg-black/30" tabIndex={-1}>
								<Linkedin className="text-slate-300" />
							</Button>
						</a>
					</Tooltip>

					<Tooltip title="My Github">
						<a href="https://github.com/Pranayyeshaiah97" target="_blank">
							<Button variant="ghost" size="icon" className="hover:bg-black/30" tabIndex={-1}>
								<Github className="text-slate-300" />
							</Button>
						</a>
					</Tooltip>
				</nav>
			</div>
		</header>
	);
};

export default Header;
