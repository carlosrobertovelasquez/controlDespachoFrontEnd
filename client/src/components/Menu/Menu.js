/* eslint-disable react/style-prop-object */
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
export default function Menu() {
	const { auth, logout } = useAuth();
	const { name } = auth;
	let url = '';
	const onLogout = () => {
		logout();
	};
	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<a href={url} className="brand-link">
				<img
					src="dist/img/AdminLTELogo.png"
					alt="AdminLTE Logo"
					className="brand-image img-circle elevation-3"
				/>
				<span className="brand-text font-weight-light">Control Despacho</span>
			</a>
			<div className="sidebar">
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
					<div className="image">
						<a href={url}>
							<img src="dist/img/user2-160x160.jpg" alt="User Image" className="img-circle elevation-2" />
						</a>
					</div>
					<div className="info">
						<a href={url} className="d-block">
							{name}
						</a>
					</div>
				</div>

				<nav className="mt-2">
					<ul
						className="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false"
					>
						<li className="nav-item has-treeview menu-close">
							<a href={url} className="nav-link active">
								<i className="nav-icon fas fa-tachometer-alt" />
								<p>
									Maestros
									<i className="right fas fa-angle-left" />
								</p>
							</a>

							<ul className="nav nav-treeview">
								<li className="nav-item">
									<Link to="/vehiculos">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Vehiculos</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/motoristas">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Motoristas</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/preparadores">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Preparadores</p>
										</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item has-treeview menu-open">
							<a href={url} className="nav-link active">
								<i className="nav-icon fas fa-tachometer-alt" />
								<p>
									Transacciones
									<i className="right fas fa-angle-left" />
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className="nav-item">
									<Link to="/pedidos">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Pedidos</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/autorizacion">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Autorizacion de Pedidos</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/ticket">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Ticket Preparacion</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/factura">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Factura Despacho</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/flete">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Flete Despacho</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Liquidacion</p>
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item has-treeview menu-close">
							<a href={url} className="nav-link active">
								<i className="nav-icon fas fa-tachometer-alt" />
								<p>
									Consulta
									<i className="right fas fa-angle-left" />
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Ticket</p>
									</a>
								</li>
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Flete</p>
									</a>
								</li>
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Liquidacion</p>
									</a>
								</li>
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Pantalla Completa</p>
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item has-treeview menu-close">
							<a href={url} className="nav-link active">
								<i className="nav-icon fas fa-tachometer-alt" />
								<p>
									Reportes/Graficos
									<i className="right fas fa-angle-left" />
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className="nav-item">
									<Link to="/GraficosTicket">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Grafico de Ticket</p>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/GraficosFlete">
										<a href={url} className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Grafico de Flete</p>
										</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item has-treeview menu-close">
							<a href={url} className="nav-link active">
								<i className="nav-icon fas fa-tachometer-alt" />
								<p>
									Administracion
									<i className="right fas fa-angle-left" />
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Usuarios</p>
									</a>
								</li>
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Desbloqueo de Ticket</p>
									</a>
								</li>
								<li className="nav-item">
									<a href={url} className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Parametros Generales</p>
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a href={url} onClick={onLogout} className="nav-link active">
								<i className=" nav-icon far fa-plus-square " />
								<p>
									Salir
									<span className="right badge badge-danger">Salir</span>
								</p>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
}
