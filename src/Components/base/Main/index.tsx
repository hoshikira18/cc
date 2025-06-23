import MicroMarket from '../../MicroMarket';
import SmartFridge from '../../SmartFride';
import OfficeWorks from '../../OfficeWorks';
import OurService from '../../OurService';
import OurProduct from '../../OurProduct';
import Benefit from '../../Benefit';
import Employee from '../../Employee';
import ImageIntro from '../../ImageIntro';
import FormSubmit from '../../FormSubmit';
import ProductSlider from '../ProductSlider';

const Main = () => {
	return (
		<>
			<div className="lg:px-28 max-w-screen-2xl mx-auto">
				<div className="my-40 relative">
					<img
						src="/banner.jpg"
						className="w-full object-cover"
						alt="Banner"
					/>
					<div className="absolute bottom-0 left-0 right-0 text-center">
						<button className=" px-10 py-5 bg-blue-500 rounded-2xl text-2xl font-extrabold animate-bounce text-white">
							Click Me
						</button>
					</div>
				</div>
				<ProductSlider />
				<div className="text-center my-20">
					<h1 className="uppercase text-2xl font-bold mb-16">
						Chứng nhận bởi các tổ chức quốc tế
					</h1>
					<div className="grid grid-cols-3 gap-5">
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./logo.png"
								alt="Logo 1"
								className="w-1/2 mx-auto border-2"
							/>
							<p className="text-gray-600 font-bold text-xl">
								Description for Logo 1
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./logo.png"
								alt="Logo 1"
								className="w-1/2 mx-auto border-2"
							/>
							<p className="text-gray-600 font-bold text-xl">
								Description for Logo 1
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./logo.png"
								alt="Logo 1"
								className="w-1/2 mx-auto border-2"
							/>
							<p className="text-gray-600 font-bold text-xl">
								Description for Logo 1
							</p>
						</div>
					</div>
				</div>
				{/* <MicroMarket />
				<SmartFridge /> */}
			</div>
			{/* <OfficeWorks />
			<div className="lg:px-28 py-0">
				<OurService />
				<OurProduct />
				<Benefit />
			</div>
			<Employee />
			<ImageIntro />
			<FormSubmit /> */}
		</>
	);
};

export default Main;
