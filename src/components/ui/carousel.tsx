import Image from 'next/image';

type Props = {
	images: string[];
	imgWidth: number;
	imgHeight: number;
};

const Carousel = ({ images, imgWidth, imgHeight }: Props) => {
	return (
		<div className="w-full h-full overflow-auto snap-x snap-mandatory flex">
			{images.map((x, i) => (
				<Image key={i} src={x} width={imgWidth} height={imgHeight} alt="preview" className="shrink-0 top-0 inset-0" />
			))}
		</div>
	);
};

export default Carousel;
