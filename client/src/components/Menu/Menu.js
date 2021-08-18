/* eslint-disable react/style-prop-object */
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

import { MdLocalShipping, MdPermContactCalendar, MdContentPaste } from 'react-icons/md';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaStamp } from 'react-icons/fa';
import { Accordion } from 'react-bootstrap-accordion';
import Global from '../../Global';
export default function Menu() {
	const { auth, logout } = useAuth();
	const { name } = auth;
	let url = '';
	const onLogout = () => {
		logout();
	};
	const rutaServidor = Global.rutaServidor;
	return (
		<React.Fragment>
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				<a href="/" className="brand-link">
					<img
						src={rutaServidor + `/dist/img/AdminLTELogo.png`}
						alt="AdminLTE Logo"
						className="brand-image img-circle elevation-3"
					/>
					<span className="brand-text font-weight-light">Control Despacho</span>
				</a>
				<div className="sidebar">
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<a href="/">
								<img
									src={rutaServidor + `/dist/img/user2-160x160.jpg`}
									alt="User Image"
									className="img-circle elevation-2"
								/>
							</a>
						</div>
						<div className="info">
							<a href={url} className="d-block">
								{name}
							</a>
						</div>
					</div>
				</div>

				<div>
					<Accordion title="Maestros">
						<div
							style={{
								background: '#343A40',
								height: '50px',
								marginBottom: '2px',
								alignContent: 'center'
							}}
						>
							<Link to={rutaServidor + `/vehiculos`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<MdLocalShipping size={34} /> Vehiculos
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/motoristas`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<MdPermContactCalendar size={34} />Motoristas
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/preparadores`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										{' '}
										<MdPermContactCalendar size={34} /> Preparadores
									</p>
								</a>
							</Link>
						</div>
					</Accordion>
					<Accordion title="Transacciones" defaultActiveKey="0">
						<div
							style={{
								background: '#343A40',
								height: '50px',
								marginBottom: '2px',
								alignContent: 'center'
							}}
						>
							<Link to={rutaServidor + `/pedidos`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<MdContentPaste size={34} />Pedidos
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/autorizacion`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<FaStamp size={34} /> Autorizacion de Pedidos
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/ticket`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Ticket Preparacion
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/factura`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Factura Despacho
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/flete`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Flete Despacho
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/liquidacion`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Liquidacion
									</p>
								</a>
							</Link>
						</div>
					</Accordion>
					<Accordion title="Consulta">
						<div
							style={{
								background: '#343A40',
								height: '50px',
								marginBottom: '2px',
								alignContent: 'center'
							}}
						>
							<Link to={rutaServidor + `/consultaTickets`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Ticket
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/consultaFletes`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Flete
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/pantallaCompletaTickets`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Pantalla Completa
									</p>
								</a>
							</Link>
						</div>
					</Accordion>
					<Accordion title="Reportes/Graficos">
						<div
							style={{
								background: '#343A40',
								height: '50px',
								marginBottom: '2px',
								alignContent: 'center'
							}}
						>
							<Link to={rutaServidor + `/GraficosTicket`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Grafico de Ticket
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to={rutaServidor + `/GraficoFlete`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Grafico de Flete
									</p>
								</a>
							</Link>
						</div>
					</Accordion>
					<Accordion title="Administracion">
						<div
							style={{
								background: '#343A40',
								height: '50px',
								marginBottom: '2px',
								alignContent: 'center'
							}}
						>
							<Link to={rutaServidor + `/vehiculos`}>
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Usuarios
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to="/vehiculos">
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Desbloqueo de Ticket
									</p>
								</a>
							</Link>
						</div>
						<div style={{ background: '#343A40', height: '50px', marginBottom: '2px' }}>
							<Link to="/vehiculos">
								<a style={{ color: '#fff' }} href={url} className="nav-link">
									<p>
										<BsGearWideConnected size={34} />Parametros Generales
									</p>
								</a>
							</Link>
						</div>
					</Accordion>
					<Accordion title="Salir">
						<a style={{ color: '#fff' }} href={url} onClick={onLogout} className="nav-link active">
							<p>
								Salir
								<span className="right badge badge-danger">Salir</span>
							</p>
						</a>
					</Accordion>
				</div>
			</aside>
		</React.Fragment>
	);
}
