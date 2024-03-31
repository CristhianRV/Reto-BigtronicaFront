import './Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { uploadProducts, uploadLabels } from './redux/slices/thunkShop';
import { setProductsView } from './redux/slices/sliceShop';
import { useAppDispatch, useAppSelector } from './config/configRedux';
import { LandingPage, ProductID } from './views';
import { NavBar, Footer } from './components';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(uploadProducts());
		dispatch(uploadLabels());
	}, []);
	const products = useAppSelector((state) => state.shop.products);
	dispatch(setProductsView(products));

	return (
		<div className="containerApp">
			<NavBar />
			<Routes>
				<Route exact path="/*" element={<LandingPage />} />
				<Route exact path="/:id" element={<ProductID />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
