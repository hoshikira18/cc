import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../../Components/base/Header';
import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import Footer from '../../Components/NM/common/Footer';
import ChatBox from '../../Components/ChatBox';
interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}
const HomePage = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/' ? 'main' : 'sub';
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		setCollapsed(false);
		window.scrollTo(0, 0);
	}, [isHomePage, location]);

	return (
		<>
			<ChatBox />
			<div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
				<a
					href="https://m.me/yourpage"
					target="_blank"
					title="Messenger"
					className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-100"
				>
					<img
						src="/messenger.png"
						alt="Messenger"
						className="w-6 h-6"
					/>
				</a>

				<a
					href="https://zalo.me/yourzaloid"
					target="_blank"
					title="Zalo"
					className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-100"
				>
					<img src="/zalo.png" alt="Zalo" className="w-6 h-6" />
				</a>

				<a
					href="tel:0123456789"
					title="Call"
					className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-green-100"
				>
					<img src="/phone.png" alt="Phone" className="w-6 h-6" />
				</a>
			</div>
			<div className="relative bg-[#FEFAF5]">
				<Header
					type={isHomePage}
					toggleCollapsed={toggleCollapsed}
					collapsed={collapsed}
				/>
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
