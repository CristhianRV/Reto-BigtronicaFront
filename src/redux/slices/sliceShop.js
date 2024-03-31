import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	productsView: [],
	product: {
		id: '',
		name: '',
		description: '',
		image: '',
		label: '',
		stock: 0,
		price: '',
	},
	labels: [],
	message: '',
};

export const sliceShop = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setProductsView: (state, action) => {
			state.productsView = action.payload;
		},
		setProduct: (state, action) => {
			state.product = action.payload;
		},
		setLabels: (state, action) => {
			state.labels = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
	},
});

export const {
	setProducts,
	setProductsView,
	setProduct,
	setLabels,
	setMessage,
} = sliceShop.actions;
