import style from '../Styles/Footer.module.css';
import githud from '../image/githud-icon.png';
import facebook from '../image/facebook-icon.png';
import youtube from '../image/youtube-icon.png';
import whatsapp from '../image/whatsapp-icon.png';
import instagram from '../image/instagram-icon.png';

const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.items}>
				<div className={style.information}>
					<h3>CONTABILIDAD</h3>
					<p>Whatsapp: 350 340 71 71</p>
					<p>Correo: contabilidad@bigtronica.com</p>
				</div>
				<div className={style.information}>
					<h3>VENTAS</h3>
					<p>Whatsapp: 315 643 53 52</p>
					<p>Correo: ventas@bigtronica.com</p>
					<p>Telefono: 322 24 64</p>
				</div>
				<div className={style.information}>
					<h3>MÁS INFORMACIÓN</h3>
					<p>Como comprar</p>
					<p>Métodos de pago</p>
					<p>Envios y domicilios</p>
				</div>
				<div className={style.information}>
					<h3>AYUDA</h3>
					<p>Obtener ayuda</p>
					<p>Estado del pedido</p>
					<p>Envíos y entregas</p>
					<p>Devoluciones</p>
					<p>Opciones de pago</p>
				</div>
				<div className={style.information}>
					<h3>EMPRESA</h3>
					<p>Acerca de Bigtronica</p>
					<p>Novedades</p>
					<p>Empleo</p>
					<p>Sostenibilidad</p>
					<p>Proposito</p>
				</div>

				<div className={style.connetion}>
					<img src={whatsapp} alt="Whatsapp" />
					<img src={facebook} alt="Facebook" />
					<img src={instagram} alt="Instagem" />
					<img src={youtube} alt="Youtube" />
					<img src={githud} alt="GitHud" />
				</div>
			</div>
			<div className={style.ubication}>
				<p>
					Bigtronica Since / 2015 Carrera 53# 50-51, C.C LA CASCADA, LOCAL
					212H,Medellín, Antioquia
				</p>
			</div>
		</div>
	);
};

export default Footer;
