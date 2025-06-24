import Footer from '../Components/NM/common/Footer';
import Header from '../Components/NM/common/Header';
import Characteristics from '../Components/NM/components/Characteristics';
import Home from '../Components/NM/components/Home';
import MoveTop from '../Components/NM/components/MoveTop';
import Stories from '../Components/NM/components/Stories';

function Process() {
	return (
		<div>
			<MoveTop />
			{/* <Header /> */}
			<Home />
			<Stories />
			<Characteristics />
			<Footer />
		</div>
	);
}

export default Process;
