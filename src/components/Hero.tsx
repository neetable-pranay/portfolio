import Image from 'next/image';

const Hero = () => {
	return (
		<section className="min-h-screen flex flex-col w-full pt-[4.5rem] relative overflow-hidden px-4 z-0 mb-10">
			<Image
				src="/img/illustration.png?v=01"
				alt="illustration"
				width={1920}
				height={1080}
				className="absolute inset-0 w-full h-full object-cover object-right"
			/>
			<div className="absolute left-0 w-1/2 min-w-[320px] h-full bg-gradient-to-r from-slate-900 from-10% via-slate-900/60 via-80% to-transparent "></div>
			<div className="my-auto z-10 max-w-screen-xl w-full mx-auto ">
				<span className="text-slate-400 text-3xl font-semibold block mb-4">Hey there! 👋</span>
				<h1 className="text-slate-50 text-6xl font-bold mb-4">
					I&apos;m <span className="text-violet-500">Name</span>
				</h1>
				<h2 className="text-slate-300 font-semibold text-3xl max-w-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tortor massa.
				</h2>
			</div>
		</section>
	);
};

export default Hero;
