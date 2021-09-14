import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Modal, ModalBody, ModalFooter, Form, Row, Col, Alert } from 'react-bootstrap';
import Global from '../../../Global';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import ModalHeader from 'react-bootstrap/ModalHeader';
import useAuth from '../../../hooks/useAuth';

export default function Index() {
	const [ data, setData ] = useState([]);
	const [ modalEditar, setModalEditar ] = useState(false);
	const [ modalNuevo, setModalNuevo ] = useState(false);
	const [ showLogin, setShowLogin ] = useState(false);
	const [ dataAyudantes, setDataAyudantes ] = useState([]);
	const [ modalCambioClave, setModalCambioClave ] = useState(false);
	const [ lengPassword, setLengPassword ] = useState('');
	const [ usuarioSeleccionado, setUsuarioSeleccionado ] = useState({
		id: '',
		nombre: '',
		email: '',
		password: '',
		estado: '',
		idPreparador: ''
	});

	const [ activo, setActivo ] = useState(true);
	const [ roluser, setRolUser ] = useState('usuario');
	const { auth } = useAuth();
	const { rol } = auth;

	useEffect(
		() => {
			var url = Global.url;
			var request = '/users';
			const fecthMotoristas = async () => {
				await axios.get(url + request).then((resp) => {
					setData(resp.data.datos);
				});
			};
			fecthMotoristas();
		},
		[ data ]
	);

	const formik = useFormik({
		initialValues: {
			nombre: '',
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			nombre: Yup.string().min(5, 'Nombre tiene que ser mayor a 5 Caracteres').required('Requerido'),
			email: Yup.string().email('Direccion No es correcta').required('Requerido'),
			password: Yup.string()
				.min(5, 'Tiene que ser Mayor de 5 Caracteres')
				.max(30, 'Tiene que ser Menor que 30 Caracteres')
				.required('Requerido')
		}),
		onSubmit: (values) => {
			register(values.nombre, values.email, values.password);
		}
	});

	const register = (nombre, email, password) => {
		var url = Global.url;
		var request = '/users';
		axios
			.post(url + request, {
				name: nombre,
				email: email,
				password: password
			})
			.then((resp) => {
				if (resp.data.success) {
					console.log(resp.data);
					swal('Guardado', resp.data.message, 'success');

					setShowLogin(true);
					setModalNuevo(false);
				} else {
					swal('Error ', resp.data.message, 'error');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const columnas = [
		{
			name: 'ID',
			selector: 'id',
			sortable: true
		},
		{
			name: 'Nombre',
			selector: 'name',
			sortable: true
		},
		{
			name: 'Correo',
			selector: 'email',
			sortable: true
		},
		{
			name: 'Rol',
			selector: 'Rol',
			sortable: true
		},
		{
			name: 'Estado',
			selector: 'active',
			sortable: true
		},
		{
			name: 'Preparador',
			selector: 'idPreparador',
			sortable: true
		},
		{
			name: 'Cambio Clave',
			selector: 'clave',
			right: true,
			ignoreRowClick: true,
			cell: (row) => (
				<Button className="btn btn-primary" onClick={(e) => selecionarUsuario(row, 'Editar')}>
					Editar
				</Button>
			)
		},

		{
			name: 'Editar',
			selector: 'editar',
			right: true,
			ignoreRowClick: true,
			cell: (row) => (
				<Button className="btn btn-primary" onClick={(e) => cambioClave(row, 'Editar')}>
					Cambio Clave
				</Button>
			)
		}
	];

	const selecionarUsuario = (elemento, caso) => {
		setUsuarioSeleccionado(elemento);
		datosAyudatentes();
		setRolUser(elemento.Rol);
		if (elemento.active === 'ACTIVO') {
			setActivo(true);
		} else {
			setActivo(false);
		}
		caso === 'Editar' && setModalEditar(true);
	};
	const cambioClave = (elemento, caso) => {
		setUsuarioSeleccionado(elemento);
		setModalCambioClave(true);
		setRolUser(elemento.Rol);
		if (elemento.active === 'ACTIVO') {
			setActivo(true);
		} else {
			setActivo(false);
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUsuarioSeleccionado((prevState) => ({
			...prevState,
			[name]: value
		}));
	};
	const abriModalInsertar = () => {
		setModalNuevo(true);
	};
	const cambioRadioRol = (e) => {
		setRolUser(e.target.value);
	};
	const datosAyudatentes = async () => {
		var url = Global.url;
		var request = '/ayudantesActivos';

		await axios.get(url + request).then((resp) => {
			setDataAyudantes(resp.data);
		});
	};
	const updateUser = async () => {
		var tipoUser = '';
		if (roluser === 'ADMINISTRADOR') {
			tipoUser = 'ADMIN';
		} else {
			tipoUser = 'dbo';
		}
		var estado = '';
		if (activo) {
			estado = '1';
		} else {
			estado = '0';
		}
		var url = Global.url;
		var request = `/users/${usuarioSeleccionado.id}`;
		await axios
			.put(url + request, {
				name: usuarioSeleccionado.name,
				rol: tipoUser,
				active: estado,
				idPreparador: usuarioSeleccionado.idPreparador
			})
			.then((resp) => {
				setModalEditar(false);
			});
	};
	const updatePassword = async () => {
		setLengPassword(usuarioSeleccionado.password);

		if (usuarioSeleccionado.password === '' || lengPassword.length < 5) {
			swal('Error', 'No pueder estar en Blanco password o menos de 6 caracteres', 'success');
		} else {
			var url = Global.url;
			var request = `/user/${usuarioSeleccionado.id}`;
			await axios
				.put(url + request, {
					password: lengPassword
				})
				.then((resp) => {
					swal('Mensaje', resp.data.message, 'success');
					setModalCambioClave(false);
				});
		}
	};
	return (
		<React.Fragment>
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Usuarios</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Inicio</a>
									</li>
									<li className="breadcrumb-item active">Usuarios</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				{rol === 'ADMIN' ? (
					<section className="content">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										<Button variant="success" onClick={() => abriModalInsertar()}>
											Nuevo Usuario
										</Button>
										<DataTable columns={columnas} data={data} pagination dense />
									</div>
								</div>
							</div>
						</div>
						<Modal show={modalEditar}>
							<ModalHeader>
								<div>
									<h3>Editar Usuario</h3>
								</div>
							</ModalHeader>
							<ModalBody>
								<Form>
									<Form>
										<div className="register-box">
											<div className="card-body register-card-body">
												<form>
													<div className="input-group mb-3">
														<input
															type="email"
															name="email"
															value={usuarioSeleccionado && usuarioSeleccionado.email}
															onChange={handleChange}
															className="form-control"
															placeholder="Correo"
															autoComplete="off"
															disabled="true"
														/>
													</div>
													<div className="input-group mb-3">
														<input
															type="text"
															name="name"
															value={usuarioSeleccionado && usuarioSeleccionado.name}
															onChange={handleChange}
															className="form-control"
															placeholder="Nombre Completo"
															required
														/>
													</div>
													<div>
														<select
															name="idPreparador"
															className="form-control"
															onChange={handleChange}
														>
															<option
																value={
																	usuarioSeleccionado &&
																	usuarioSeleccionado.idPreparador
																}
															>
																{usuarioSeleccionado.idPreparador}
															</option>
															{dataAyudantes.map((fbb) => {
																return (
																	<option key={fbb.id} value={fbb.id}>
																		{fbb.id}-{fbb.nombre}
																	</option>
																);
															})}
														</select>
													</div>
													<div className="input-group mb-3">
														<div className="form-check">
															<input
																className="form-check-input"
																type="checkbox"
																value={activo}
																defaultChecked={activo}
																onChange={() => setActivo(!activo)}
																id="defaultCheck1"
															/>
															<label className="form-check-label" for="defaultCheck1">
																Activo
															</label>
														</div>
													</div>
													<div className="input-group mb-3">
														<div className="fom-check">
															<input
																className="form-check-input"
																type="radio"
																value="ADMINISTRADOR"
																name="ADMINISTRADOR"
																checked={roluser === 'ADMINISTRADOR' ? true : false}
																onChange={cambioRadioRol}
															/>
														</div>
														<label className="form-check-label" for="administrador">
															Administrador
														</label>
													</div>
													<div className="input-group mb-3">
														<div className="fom-check">
															<input
																className="form-check-input"
																type="radio"
																value="USUARIO"
																name="USUARIO"
																checked={roluser === 'USUARIO' ? true : false}
																onChange={cambioRadioRol}
															/>
														</div>
														<label className="form-check-label" for="usuario">
															Usuario
														</label>
													</div>
												</form>
											</div>
										</div>
									</Form>
								</Form>
							</ModalBody>
							<ModalFooter>
								<button className="btn btn-primary" onClick={() => updateUser()}>
									Actualizar
								</button>
								<button className="btn btn-danger" onClick={() => setModalEditar(false)}>
									cancelar
								</button>
							</ModalFooter>
						</Modal>

						<Modal show={modalNuevo}>
							<ModalHeader>
								<div>
									<h3>Nuevo Usuario</h3>
								</div>
							</ModalHeader>
							<ModalBody>
								<div className="register-box">
									<div className="card-body register-card-body">
										<form onSubmit={formik.handleSubmit}>
											<div className="input-group mb-3">
												<input
													type="text"
													name="nombre"
													{...formik.getFieldProps('nombre')}
													className="form-control"
													placeholder="Nombre Completo"
													required
												/>
												<div className="input-group-append">
													<div className="input-group-text">
														<span className="fas fa-user" />
													</div>
												</div>
												{formik.touched.nombre && formik.errors.nombre ? (
													<div>{formik.errors.nombre}</div>
												) : null}
											</div>
											<div className="input-group mb-3">
												<input
													type="email"
													name="email"
													{...formik.getFieldProps('email')}
													className="form-control"
													placeholder="Correo"
													autoComplete="off"
												/>
												<div className="input-group-append">
													<div className="input-group-text">
														<span className="fas fa-envelope" />
													</div>
												</div>
												{formik.touched.email && formik.errors.email ? (
													<div>{formik.errors.email}</div>
												) : null}
											</div>
											<div className="input-group mb-3">
												<input
													type="password"
													name="password"
													{...formik.getFieldProps('password')}
													className="form-control"
													placeholder="Password"
													autoComplete="off"
												/>
												<div className="input-group-append">
													<div className="input-group-text">
														<span className="fas fa-lock" />
													</div>
												</div>
												{formik.touched.password && formik.errors.password ? (
													<div>{formik.errors.password}</div>
												) : null}
											</div>
											<div className="row">
												<div className="col-5">
													<button type="submit" className="btn btn-danger btn-block">
														Registrarse
													</button>
												</div>
												<div className="col-5">
													<button
														onClick={() => setModalNuevo(false)}
														className="btn btn-primary btn-block"
													>
														Cancelar
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</ModalBody>
						</Modal>
						<Modal show={modalCambioClave}>
							<ModalHeader>
								<div>
									<h3>Cambio Password</h3>
								</div>
							</ModalHeader>
							<ModalBody>
								<Form>
									<Form>
										<div className="register-box">
											<div className="card-body register-card-body">
												<form>
													<div className="input-group mb-3">
														<input
															type="email"
															name="email"
															value={usuarioSeleccionado && usuarioSeleccionado.email}
															onChange={handleChange}
															className="form-control"
															placeholder="Correo"
															autoComplete="off"
															disabled="true"
														/>
													</div>
													<div className="input-group mb-3">
														<input
															type="text"
															name="name"
															value={usuarioSeleccionado && usuarioSeleccionado.name}
															onChange={handleChange}
															className="form-control"
															placeholder="Nombre Completo"
															disabled="true"
														/>
													</div>
													<div>
														<input
															type="text"
															name="password"
															value={usuarioSeleccionado && usuarioSeleccionado.password}
															onChange={handleChange}
															className="form-control"
															placeholder="Nuevo Password"
														/>
													</div>
												</form>
											</div>
										</div>
									</Form>
								</Form>
							</ModalBody>
							<ModalFooter>
								<button className="btn btn-primary" onClick={() => updatePassword()}>
									Actualizar
								</button>
								<button className="btn btn-danger" onClick={() => setModalCambioClave(false)}>
									cancelar
								</button>
							</ModalFooter>
						</Modal>
					</section>
				) : (
					<div>
						<Alert variant="danger" dismissible>
							<Alert.Heading>Accesso Denegado</Alert.Heading>
							<p>Resive su Rol de usuario o pongase en contacto con Administrador</p>
						</Alert>
					</div>
				)}
			</div>
		</React.Fragment>
	);
}
