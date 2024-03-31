import { configureStore } from '@reduxjs/toolkit';
import { sliceShop } from '../slices/sliceShop';

const store = configureStore({
	reducer: { shop: sliceShop.reducer },
});

export default store;
