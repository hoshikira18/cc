import React from 'react';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import HomePage from './Page/HomePage';
import FoodAndDrinkPage from './Page/FoodDrinkPage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';
import GuestInfo from './Page/Admin/GuestInfo';
import Dashboard from './Page/Admin/DashboardPage';
import User from './Page/Admin/Profile';
import ListCategory from './Page/Admin/Category/ListCategory';
import Main from './Components/base/Main';
import ProductPage from './Page/ProductPage';
import SignIn from './Page/Auth/SignIn';
import ForgotPassword from './Page/Auth/ForgotPassword';
import FoodDrinkDetailPage from './Page/FoodDrinkDetailPage';
import AddAndEditProduct from './Page/Admin/Products/AddAndEditProduct';
import ListProduct from './Page/Admin/Products/ListProduct';
import ListFoodDrinkCategory from './Page/Admin//FoodDrinkCategory/ListFoodDrinkCategory';
import ListFoodDrink from './Page/Admin/FoodDrink/ListFoodDrink';
import AddAndEditDrinkFood from './Page/Admin/FoodDrink/AddAndEditFoodDrink';
import AddAndEditCategory from './Page/Admin/Category/AddAndEditCategory';
import AddAndEditFoodDrinkCategory from './Page/Admin/FoodDrinkCategory/AddAndEditFoodDrinkCategory';
import ScrollToTop from './Components/ScrollToTop';
import ProductScreen from './Page/ProductScreen';
import ProductDetailPage from './Page/ProductDetailScreen';
import Process from './Page/Process';
import ProductDetailPage1 from './Page/ProductDetailScreen/index1';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />}>
						<Route index element={<Main />} />
						<Route path="products" element={<ProductScreen />} />
						<Route
							path="/products/id"
							element={<ProductDetailPage />}
						/>
						<Route
							path="/products/id1"
							element={<ProductDetailPage1 />}
						/>
						<Route path="process" element={<Process />} />
						<Route
							path="micro-market-solutions"
							element={<ProductPage />}
						/>
						<Route
							path="micro-market-solutions/:id"
							element={<ProductDetailPage />}
						/>
						<Route
							path="food-and-drink"
							element={<FoodAndDrinkPage />}
						/>
						<Route
							path="food-and-drink/:id"
							element={<FoodDrinkDetailPage />}
						/>
						<Route path="contact-us" element={<ContactPage />} />
						<Route path="about-us" element={<AboutPage />} />
					</Route>
					<Route path="admin" element={<Dashboard />}>
						<Route index element={<Navigate to="profile" />} />
						<Route path="profile" element={<User />} />
						<Route path="guestInfo" element={<GuestInfo />} />
						<Route
							path="micro-market-solutions"
							element={<ListCategory />}
						/>
						<Route
							path="micro-market-solutions/add"
							element={<AddAndEditCategory />}
						/>
						<Route
							path="micro-market-solutions/edit/:id"
							element={<AddAndEditCategory />}
						/>
						<Route
							path="micro-market-solutions/view/:categoryId"
							element={<ListProduct />}
						/>
						<Route
							path="micro-market-solutions/view/:categoryId/add"
							element={<AddAndEditProduct />}
						/>
						<Route
							path="micro-market-solutions/view/:categoryId/edit/:id"
							element={<AddAndEditProduct />}
						/>
						<Route
							path="food-and-drink"
							element={<ListFoodDrinkCategory />}
						/>
						<Route
							path="food-and-drink/add"
							element={<AddAndEditFoodDrinkCategory />}
						/>
						<Route
							path="food-and-drink/edit/:id"
							element={<AddAndEditFoodDrinkCategory />}
						/>
						<Route
							path="food-and-drink/view/:categoryId"
							element={<ListFoodDrink />}
						/>
						<Route
							path="food-and-drink/view/:categoryId/add"
							element={<AddAndEditDrinkFood />}
						/>
						<Route
							path="food-and-drink/view/:categoryId/edit/:id"
							element={<AddAndEditDrinkFood />}
						/>
					</Route>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="reset-password" element={<ForgotPassword />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
