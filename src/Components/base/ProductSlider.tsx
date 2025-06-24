import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import { useRef } from 'react';

function ProductSlider() {
	const swiperRef = useRef<SwiperClass | null>(null); // Reference to the swiper instance

	return (
		<div className="bg-green-100/50 rounded-2xl relative">
			{/* Custom left arrow */}
			<button
				className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-3xl z-50"
				onClick={() => swiperRef.current?.slidePrev()}
			>
				&#10094;
			</button>

			{/* Custom right arrow */}
			<button
				className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-3xl z-50"
				onClick={() => swiperRef.current?.slideNext()}
			>
				&#10095;
			</button>

			<Swiper
				onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
				spaceBetween={50} // Space between slides
				slidesPerView={1} // Number of slides visible at once
				loop={true} // Infinite loop mode
				pagination={{
					clickable: true, // Enable pagination buttons
				}}
				navigation={false} // Disable the default navigation (as we're using custom buttons)
			>
				<SwiperSlide>
					<div className="w-full h-[600px] flex items-center justify-center">
						<img
							src="./logo.png"
							alt="Product 1"
							className="w-1/2"
						/>
						<div className="flex flex-col mt-4 w-1/2">
							<QualityItem />
							<QualityItem />
							<QualityItem />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-full h-[600px] flex items-center justify-center">
						<img
							src="./logo.png"
							alt="Product 2"
							className="w-1/2"
						/>
						<div className="flex flex-col mt-4 w-1/2">
							<QualityItem />
							<QualityItem />
							<QualityItem />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default ProductSlider;

const QualityItem = () => {
	return (
		<div className="flex items-center">
			<img
				src="./logo.png"
				alt="Quality Item"
				className="w-1/3 h-40 mb-4"
			/>
			<div>
				<h3 className="text-lg font-semibold">Quality Item</h3>
				<p className="text-gray-600">
					Description of the quality item.
				</p>
			</div>
		</div>
	);
};
