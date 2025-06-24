import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../../Components/base/Header';
import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import Footer from '../../Components/NM/common/Footer';
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
