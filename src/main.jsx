import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './Styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			{/* <React.StrictMode> */}
			<App />
			{/* </React.StrictMode> */}
		</BrowserRouter>
	</Provider>,
);
// postMessage({ payload: 'removeLoading' }, '*');