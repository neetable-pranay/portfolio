import Image from 'next/image';

const Hero = () => {
	return (
		<section className="min-h-[calc(100vh-7rem)] pt-12 lg:pt-0 flex flex-col w-full mt-[4.5rem] relative px-4 z-0 mb-10">
			<Image
				src="/img/bg-pattern.svg"
				alt="illustration"
				width={1920}
				height={1080}
				className="absolute inset-0 object-cover w-full h-full opacity-80"
				priority
			/>

			<div className="z-10 flex flex-col items-center justify-between w-full max-w-screen-xl gap-20 mx-auto my-auto lg:flex-row">
				<div>
					<span className="block mb-4 text-3xl font-semibold text-slate-400">Hey there! 👋</span>
					<h1 className="mb-4 text-6xl font-bold text-slate-50">
						I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Pranay</span>
					</h1>
					<h2 className="max-w-lg text-3xl font-semibold text-slate-300">Software Engineer ||</h2>
				</div>
				<div className="w-[min(100%_,360px)] lg:w-[600px] animate-hero">
					<Image src="/img/hero.png" alt="hero" width={650} height={848} className="h-auto lg:translate-x-[86px] lg:translate-y-[50px]" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
