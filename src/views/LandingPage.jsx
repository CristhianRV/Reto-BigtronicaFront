import { useAppSelector } from '../config/configRedux';
import { Link } from 'react-router-dom';
import style from '../Styles/LandingPage.module.css';

const LandingPage = () => {
	const products = useAppSelector((state) => state.shop.productsView);

	return (
		<div className={style.container}>
			<div className={style.containerProducts}>
				{products.map((product) => {
					return (
						<div className={style.product} key={product.id}>
							<Link to={`/${product.id}`}>
								<img src={product.image} alt={product.name} />
							</Link>
							<div className={style.favoritoButton}>
								<button></button>
							</div>
							<div className={style.informationProduct}>
								<h2>{product.name}</h2>
								<div className={style.detailProduct}>
									<h4>{product.price}</h4>
									<h4>Disponible: {product.stock}</h4>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LandingPage;
