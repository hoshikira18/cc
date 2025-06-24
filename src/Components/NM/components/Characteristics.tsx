import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useVisibleOnScroll } from '../hooks/useVisibleOnScroll';

function Characteristics() {
	const { ref, visible } = useVisibleOnScroll();
	return (
		<div className="flex flex-col items-center relative overflow-hidden">
			<div ref={ref}>
				<img
					alt="hanh-fuck"
					src="/lam-voi-dam-me.png"
					className={`transition-opacity duration-700 animation-move-left w-52 ${
						visible ? 'animation-move-left' : 'opacity-0'
					}`}
				/>
			</div>

			<Feature />
			<div ref={ref}>
				<div
					className={`pointer-events-none fixed bottom-0 right-10 w-full h-[480px] bg-cover bg-no-repeat z-[-5] transition-opacity duration-600 ease-in-out ${
						visible ? 'opacity-100' : 'opacity-0'
					}`}
				></div>
			</div>
		</div>
	);
}
export default Characteristics;

const Content = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className="montserrat-font">
			<span className="text-4xl font-bold">{title}</span>
			<div className="font-semibold flex gap-2 items-center">
				<span className="py-2">Tìm hiểu thêm</span>
				<FontAwesomeIcon
					icon={faArrowRight}
					size="xs"
					className="text-red-800"
				/>
			</div>
			<div className="mt-6">
				<img
					alt="hanh-fuck"
					src="/content-green.webp"
					className="w-[380px] h-[200px]"
				/>
				<div className="font-medium w-[220px] translate-y-[-10em] translate-x-[4em]">
					<span className="dancing-font text-3xl">Bạn có biết ?</span>
					<div className="text-sm mt-2">{description}</div>
				</div>
			</div>
		</div>
	);
};

const Feature = () => {
	return (
		<div className="flex flex-col translate-x-[-4em]">
			<Feature1 />
			<Feature2 />
			<Feature3 />
			<Feature4 />
			<Feature5 />
		</div>
	);
};

const Feature1 = () => {
	const { ref, visible } = useVisibleOnScroll();
	return (
		<div ref={ref}>
			<div className="absolute mt-4 translate-x-[14em] md:translate-x-0">
				<div className="md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-1 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="173"
						height="83"
						viewBox="0 0 173 83"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M171.617 1.48242C137.635 76.7144 66 44.999 36 55.9993C6 66.9995 1.64822 82.146 1.64822 82.146"
							stroke="#3d780a"
							strokeWidth="3"
							fill="none"
						/>
					</svg>
				</div>
				<div className="translate-x-[-4em] md:hidden block">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-1-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="74"
						height="119"
						viewBox="0 0 74 119"
						fill="none"
					>
						<path
							d="M4.99982 1C-6.5004 37 16.5001 96 73 117.5"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative">
					<div className="relative top-36 left-8 z-0 rounded-full bg-[#ffffff76] size-14 -rotate-2 cursor-pointer">
						<FontAwesomeIcon
							icon={faPlay}
							size="xl"
							className="absolute top-4 left-5"
						/>
					</div>
					<picture>
						<div className="-rotate-[10deg]">
							<img
								alt="hanh-fuck"
								className={`transition-opacity duration-700 absolute z-1 scale-115 -top-8 left-36 w-12 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/zGbszVP.svg"
								loading="lazy"
							/>
						</div>

						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute right-[8em] top-72 z-0 w-36 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/1.png"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className="absolute left-[-2em] top-14 z-[-1] -rotate-3 scale-150 h-64 w-44 border-4 border-white shadow-lg"
							src="/anh-1.jpg"
							loading="lazy"
						/>
					</picture>
					<div className="w-[360px]">
						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute z-[-4] top-28 left-[-12em] scale-150 ${
								visible ? 'animation-move-left' : 'opacity-0'
							}`}
							src="/bg-nong-dan.png"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div
				className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[280px] md:top-[120px] top-[620px] left-[100px] ${
					visible ? 'animation-move-right' : 'opacity-0'
				}`}
			>
				<Content
					title="Nông Dân"
					description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
				/>
			</div>
		</div>
	);
};

const Feature2 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref}>
			<div className="mt-20">
				<div className="translate-x-12 -translate-y-3 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="314"
						height="84"
						viewBox="0 0 314 84"
						fill="none"
					>
						<path
							d="M1.29688 1.69336C53.1774 93.6787 248.733 -14.6328 312.221 82.2264"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="translate-x-[-16em] -translate-y-8 md:hidden block -scale-x-100">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative translate-x-[-14em] md:translate-x-0">
					<div className="relative top-32 left-[27em] z-2 rounded-full bg-[#ffffff76] size-14 -rotate-4 cursor-pointer">
						<FontAwesomeIcon
							icon={faPlay}
							size="xl"
							className="absolute top-4 left-5"
						/>
					</div>
					<picture>
						<div className="rotate-3">
							<img
								alt="hanh-fuck"
								className={`transition-opacity duration-700 absolute z-1 scale-110 top-24 right-2 w-10 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
								loading="lazy"
							/>
						</div>

						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute left-[30em] z-0 w-44 bottom-0 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/2.png"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className="absolute left-[23em] top-[1em] rotate-3 h-80 w-52 z-[-2] border-4 border-white shadow-lg scale-125"
							src="/anh-2.jpg"
							loading="lazy"
						/>
					</picture>
					<img
						alt="hanh-fuck"
						className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[20em]  ${
							visible ? 'animation-move-right' : 'opacity-0'
						}`}
						src="/bg-nha-nong-hoc.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[-6em] md:top-[-2em] top-[26em] left-[4em] ${
						visible ? 'animation-move-left' : 'opacity-0'
					}`}
				>
					<Content
						title="Nhà Nông Học"
						description="Các nhà nông học là cầu nối giữa khoa học và nông nghiệp."
					/>
				</div>
			</div>
		</div>
	);
};

const Feature3 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref}>
			<div className="-mt-10">
				<div className="translate-x-36 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-3 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="356"
						height="75"
						viewBox="0 0 356 75"
						fill="none"
					>
						<path
							d="M354 1C285.588 118.746 109 26 0.999996 73"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="translate-x-[25em] -translate-y-16 md:hidden block">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative -translate-y-16 translate-x-[15em] md:translate-x-0 md:translate-y-0">
					<div className="relative top-36 left-[1em] z-2 rounded-full bg-[#ffffff76] size-14 cursor-pointer">
						<FontAwesomeIcon
							icon={faPlay}
							size="xl"
							className="absolute top-4 left-5"
						/>
					</div>
					<picture>
						<div className="rotate-90">
							<img
								alt="hanh-fuck"
								className={`transition-opacity duration-700 absolute z-1 scale-110 top-24 right-60 w-10 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
								loading="lazy"
							/>
						</div>

						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute left-[3em] z-0 w-48 top-64 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/3.png"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className="absolute left-[-5em] top-0 h-80 w-56 z-[-2] border-4 border-white shadow-lg scale-110"
							src="/anh-3.jpg"
							loading="lazy"
						/>
					</picture>
					<img
						alt="hanh-fuck"
						className={`transition-opacity duration-700 absolute z-[-4] top-0 left-[-11em] w-80  ${
							visible ? 'animation-move-right' : 'opacity-0'
						}`}
						src="/bg-nha-san-xuat.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[280px] left-[100px] md:top-0 top-[360px] ${
						visible ? 'animation-move-right' : 'opacity-0'
					}`}
				>
					<Content
						title="Nông Dân"
						description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
					/>
				</div>
			</div>
		</div>
	);
};

const Feature4 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref}>
			<div className="-mt-12">
				<div className="translate-x-8 -translate-y-16 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="314"
						height="84"
						viewBox="0 0 314 84"
						fill="none"
					>
						<path
							d="M1.29688 1.69336C53.1774 93.6787 248.733 -14.6328 312.221 82.2264"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="-translate-x-[17em] -translate-y-36 md:hidden block -scale-x-100 ">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative md:translate-x-0 translate-x-[-14em] md:translate-y-0 translate-y-[-5em] -z-10">
					<div className="relative top-20 left-[27em] z-2 rounded-full bg-[#ffffff76] size-14 -rotate-4 cursor-pointer">
						<FontAwesomeIcon
							icon={faPlay}
							size="xl"
							className="absolute top-4 left-5"
						/>
					</div>
					<picture>
						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute z-1 scale-110 top-28 right-8 w-10 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute left-[32em] z-0 w-48 top-[13em] ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/4.png"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className="absolute left-[22em] top-[-2em] -rotate-4 h-72 w-52 z-[-2] border-4 border-white shadow-lg scale-125"
							src="/anh-4.jpg"
							loading="lazy"
						/>
					</picture>
					<img
						alt="hanh-fuck"
						className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[20em]  ${
							visible ? 'animation-move-right' : 'opacity-0'
						}`}
						src="/bg-rang-ca-phe.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[-7em] md:top-[-5em] left-[4em] top-[20em] ${
						visible ? 'animation-move-left' : 'opacity-0'
					}`}
				>
					<Content
						title="Nhà Nông Học"
						description="Các nhà nông học là cầu nối giữa khoa học và nông nghiệp."
					/>
				</div>
			</div>
		</div>
	);
};

const Feature5 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref}>
			<div className="-mt-28">
				<div className="translate-x-36 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-3 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="356"
						height="75"
						viewBox="0 0 356 75"
						fill="none"
					>
						<path
							d="M354 1C285.588 118.746 109 26 0.999996 73"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="translate-x-[25em] -translate-y-20 md:hidden block ">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative translate-x-[16em] md:translate-x-0 md:translate-y-0 translate-y-[-4em] -z-10">
					<div className="relative top-36 left-0 z-2 rounded-full bg-[#ffffff76] size-14 cursor-pointer rotate-4">
						<FontAwesomeIcon
							icon={faPlay}
							size="xl"
							className="absolute top-4 left-5"
						/>
					</div>
					<picture>
						<div className="rotate-90">
							<img
								alt="hanh-fuck"
								className={`transition-opacity duration-700 absolute z-1 scale-110 top-24 left-24 w-10 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
								loading="lazy"
							/>
						</div>

						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute left-6 z-0 w-52 top-60 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/5.png"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className="absolute left-[-6em] top-0 h-90 w-60 z-[-2] rotate-2 border-4 border-white shadow-lg scale-110"
							src="/anh-5.jpg"
							loading="lazy"
						/>
					</picture>
					<img
						alt="hanh-fuck"
						className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[-14em] w-80  ${
							visible ? 'animation-move-left' : 'opacity-0'
						}`}
						src="/bg-xay-ca-phe.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[280px] left-[4em] top-[18em] mb-64 ${
						visible ? 'animation-move-right' : 'opacity-0'
					}`}
				>
					<Content
						title="Nông Dân"
						description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
					/>
				</div>
			</div>
		</div>
	);
};
