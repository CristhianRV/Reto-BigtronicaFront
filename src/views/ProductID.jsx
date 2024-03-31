import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../config/configRedux';
import { uploadProduct } from '../redux/slices/thunkShop';
import style from '../Styles/ProductID.module.css';

const ProductID = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(uploadProduct(params.id));
	}, []);
	const product = useAppSelector((state) => state.shop.product);

	return (
		<div className={style.ContainerProduct}>
			<div className={style.image}>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={style.containerDescription}>
				<div className={style.title}>
					<h1>{product.name}</h1>
				</div>
				<div className={style.description}>
					<hr></hr>
					<h3>{product.description}</h3>
					<div className={style.information}>
						<h3>Precio: {product.price} COP</h3>
						<h3>Cantidad: {product.stock}</h3>
					</div>
					<hr></hr>
					<div className={style.buttonShop}>
						<button>COMPRAR</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductID;
