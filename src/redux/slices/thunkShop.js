import { setProducts, setProduct, setLabels, setMessage } from './sliceShop';
import { clientAxios } from '../../config/configAxios';

export const uploadProducts = () => {
	return async (dispatch, getState) => {
		try {
			const products = await clientAxios('/allProducts');
			dispatch(setProducts(products.data));
		} catch (error) {
			dispatch(setMessage({ response: error.response.data }));
		}
	};
};

export const uploadLabels = () => {
	return async (dispatch, getState) => {
		try {
			const labels = await clientAxios('/labels');
			dispatch(setLabels(labels.data));
		} catch (error) {
			dispatch(setMessage({ response: error.response.data }));
		}
	};
};

export const uploadProduct = (id) => {
	return async (dispatch, getState) => {
		try {
			const product = await clientAxios(`/${id}`);
			dispatch(setProduct(product.data[0]));
		} catch (error) {
			dispatch(setMessage({ response: error.response.data }));
		}
	};
};
