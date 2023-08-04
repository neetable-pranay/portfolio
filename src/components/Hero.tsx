import Image from 'next/image';

const Hero = () => {
	return (
		<section className="min-h-screen flex flex-col w-full max-w-screen-xl mx-auto pt-[4.5rem] relative overflow-hidden z-0 mb-10">
			<Image
				src="/img/illustration.gif"
				alt="illustration"
				width={720}
				height={697}
				className="absolute right-0 bottom-1/2 w-[620px] translate-y-1/2 rounded-2xl "
			/>

			<div className="absolute left-0 w-[min(540px,100%)] h-full bg-gradient-to-r from-slate-900 from-10% via-slate-900/60 via-80% to-transparent "></div>
			<div className="my-auto z-10">
				<span className="text-slate-400 text-3xl font-semibold block mb-4">Hey there!</span>
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
