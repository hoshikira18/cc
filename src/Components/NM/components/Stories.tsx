// Stories.tsx

type ElementProps = {
	elements: {
		image: string;
		name: string;
	};
	index: number;
};

const Element = ({ elements, index }: ElementProps) => {
	const imageClass = `
    ${index === 0 ? 'w-20' : 'w-24'} 
    ${index === 5 ? 'translate-y-4' : ''} 
  `;

	return (
		<div className="">
			<div className="flex flex-col items-center gap-4 min-h-[180px]">
				<div className="img-container animation-pulse-opacity"></div>
				<img
					src={elements.image}
					alt={elements.name}
					className={`${imageClass.trim()} mt-6`}
				/>
			</div>
			{/* <p className="text-center -translate-y-8 font-medium">
				{elements.name}
			</p> */}
		</div>
	);
};

const elements = [
	{
		image: '/1.png',
		name: 'Ảnh 1',
	},
	{
		image: '/2.png',
		name: 'Ảnh 2',
	},
	{
		image: '/3.png',
		name: 'Ảnh 3',
	},
	{
		image: '/4.png',
		name: 'Ảnh 4',
	},
	{
		image: '/5.png',
		name: 'Ảnh 5',
	},
	{
		image: '/6.png',
		name: 'Ảnh 6',
	},
];

function Stories() {
	return (
		<div className="bg-gradient-to-t from-transparent to-[#81b085]  -translate-y-[54px]">
			<section className="flex flex-col items-center gap-4 xl:px-[360px] lg:px-52 md:px-20 px-16 montserrat-font mb-6">
				<span className="title py-2 pt-16">
					Khám phá câu chuyện của những người thầm lặng đứng sau từng
					cốc tinh bột kháng mà bạn đang sử dụng mỗi ngày
				</span>
				<p className="text-lg py-2">
					Giới thiệu hành trình làm ra tinh bột kháng Kháng Tinh An:
					Khám phá sự tận tâm, nghiên cứu nghiêm túc và công nghệ hiện
					đại phía sau từng mẻ tinh bột kháng từ chuối tiêu xanh – để
					sức khỏe của bạn luôn bắt đầu từ những điều nhỏ nhất.
				</p>
			</section>

			<section className="flex flex-col items-center gap-8 montserrat-font">
				<span className="title text-center py-8 px-16">
					Gặp Gỡ Những Người Làm Nên Kháng Tinh An
				</span>
				<div className="flex items-center gap-16 lg:gap-20 flex-row flex-wrap lg:flex-nowrap justify-center w-full px-24">
					{elements.map((item, index) => (
						<Element key={index} elements={item} index={index} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Stories;
