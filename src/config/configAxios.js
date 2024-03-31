import axios from 'axios';

export const config = () => {};

const url = import.meta.env.VITE_APP_BACKEND_URL;
export const clientAxios = axios.create({
	baseURL: url,
});
