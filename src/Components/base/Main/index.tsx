import ProductSlider from '../ProductSlider';

const Main = () => {
	return (
		<>
			<div className="lg:px-28 max-w-screen-2xl mx-auto">
				<div className="my-40 relative">
					<img
						src="/home1.png"
						className="w-full object-cover"
						alt="Banner"
					/>
					<div className="absolute bottom-24 left-0 right-0 text-center">
						<button className="px-10 py-2 bg-[#5D9A4A] rounded-lg text-xl font-semibold animate-bounce text-white">
							Xem thêm
						</button>
					</div>
				</div>
				<ProductSlider />
				<div className="text-center pb-40">
					<h1 className="uppercase text-2xl font-bold mb-16 text-[#3E790A]">
						Chứng chỉ sản phẩm
					</h1>
					<div className="grid grid-cols-4 gap-5">
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE1.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								NewAge Cert
							</p>
							<p className="text-gray-600 font-bold">
								Chứng nhận ISO22000
							</p>
							<p className="px-5">
								Là đơn vị thuộc Big 4 Ngành chứng nhận tại Việt
								Nam, TQC cung cấp dịch vụ chứng nhận ISO
								22000:2018 – Tiêu chuẩn quốc tế về Hệ thống quản
								lý an toàn thực phẩm.
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE2.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								National Institute of Nutrition
							</p>
							<p className="text-gray-600 font-bold">
								Viện Dinh dưỡng Quốc gia
							</p>
							<p className="px-5">
								Chứng nhận này là một hình thức công nhận sản
								phẩm đã được đánh giá về thành phần dinh dưỡng,
								độ an toàn và hiệu quả bởi Viện Dinh dưỡng Quốc
								gia Việt Nam
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE3.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								Vietnam Journal of Food Control
							</p>
							<p className="text-gray-600 font-bold">
								Viện Kiểm nghiệm an toàn vệ sinh thực phẩm quốc
								gia
							</p>
							<p className="px-5">
								Đơn vị kiểm nghiệm thực phẩm tuyến cao nhất của
								ngành y tế; chịu sự quản lý nhà nước về hoạt
								động chuyên môn y tế của Bộ Y tế.
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE4.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								AVATEK SCIENCE TECHNOLOGY JSC
							</p>
							<p className="text-gray-600 font-bold">
								Trung tâm Kiểm nghiệm và Tư vấn UKDH AVATEK
							</p>
							<p className="px-5">
								Đơn vị hoạt động trong lĩnh vực kiểm nghiệm chất
								lượng sản phẩm và tư vấn công bố tiêu chuẩn
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
