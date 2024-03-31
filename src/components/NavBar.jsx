import Logo from '../image/LogoBigtronica.png';
import icon1 from '../image/icono-rasberry.png';
import icon2 from '../image/icono-arduino.png';
import icon3 from '../image/compras24px.png';
import icon4 from '../image/favoritos24ps.png';
import style from '../Styles/NavBar.module.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../config/configRedux';
import { setProductsView } from '../redux/slices/sliceShop';

const NavBar = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.shop.products);

	const filterLabel = (e) => {
		const value = e.target.value;
		const productsFilter = products.filter((prod) => prod.label === value);
		dispatch(setProductsView(productsFilter));
	};

	const handlerAllProducts = () => {
		dispatch(setProductsView(products));
	};

	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.icons}>
					<img src={icon1} alt="icono Raperry" />
					<img src={icon2} alt="icono Arduino" />
				</div>
				<div className={style.information}>
					<h5>Buscar tienda</h5>
					<p>|</p>
					<h5>Ayuda</h5>
					<p>|</p>
					<h5>Trabaja con nosotros</h5>
					<p>|</p>
					<h5>Iniciar sección</h5>
				</div>
			</div>
			<div className={style.navBar}>
				<Link to="/">
					<div>
						<img
							onClick={handlerAllProducts}
							className={style.logo}
							src={Logo}
							alt="Logo"
						/>
					</div>
				</Link>
				<div className={style.filters}>
					<h2>Novedades y destacados</h2>
					<h2>Tecnologia Nueva</h2>
					<h2>Ofertas</h2>
					<h2>Mas vendidos</h2>
				</div>
				<div className={style.containerSearch}>
					<div className={style.searchBar}>
						<input
							className={style.inputSearchBar}
							type="text"
							placeholder="Buscar"
						/>
						<button className={style.button}>🔍</button>
					</div>
				</div>
				<img className={style.ButtonsAction} src={icon3} alt="Compras" />
				<img className={style.ButtonsAction} src={icon4} alt="Favoritos" />
			</div>
			<div className={style.footer}>
				<div className={style.information2}>
					<button onClick={filterLabel} value="Sistemas de Desarrollo">
						Sistemas de Desarrollo
					</button>
					<p>|</p>
					<button onClick={filterLabel} value="Sensores">
						Sensores
					</button>
					<p>|</p>
					<button onClick={filterLabel} value="Impresoras 3D">
						Impresoras 3D
					</button>
					<p>|</p>
					<button onClick={filterLabel} value="Domotica">
						Domotica
					</button>
					<p>|</p>
					<button onClick={filterLabel} value="Energia Solar">
						Energia Solar
					</button>
					<p>|</p>
					<button onClick={filterLabel} value="Baterias">
						Baterias
					</button>
					<p>|</p>
					<button onClick={filterLabel} value="Herramientas">
						Herramientas
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
