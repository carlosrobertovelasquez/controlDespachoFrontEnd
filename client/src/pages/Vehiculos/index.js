import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Modal, ModalBody, ModalFooter, Form, Row, Col } from 'react-bootstrap';
import Global from '../../Global';
import axios from 'axios';
import ModalHeader from 'react-bootstrap/ModalHeader';

export default function Index() {
	const [ data, setData ] = useState([]);
	const [ modalEditar, setModalEditar ] = useState(false);
	const [ modalNuevo, setModalNuevo ] = useState(false);
	const [ vehiculoSeleccionado, setVehiculoSeleccionado ] = useState({
		id: '',
		placa: '',
		modelo: '',
		kinicial: '',
		kfinal: '',
		estado: '',
		ano: '',
		propio: '',
		combustible: ''
	});

	useEffect(() => {
		var url = Global.url;
		var request = '/vehiculos';
		const fecthVehiculos = async () => {
			await axios.get(url + request).then((resp) => {
				console.log(resp.data);
				setData(resp.data);
			});
		};
		fecthVehiculos();
	}, []);

	console.log(data);

	const columnas = [
		{
			name: 'ID',
			selector: 'id',
			sortable: true,
			compact: true,
			width: '5%'
		},
		{
			name: 'Placa',
			selector: 'placa',
			sortable: true,
			compact: true,
			width: '10%'
		},
		{
			name: 'Modelo',
			selector: 'modelo',
			sortable: true,
			compact: true,
			width: '20%'
		},
		{
			name: 'K.Inicial',
			selector: 'kinicial',
			sortable: true,
			compact: true,
			width: '5%'
		},
		{
			name: 'K.Final',
			selector: 'kfinal',
			sortable: true,
			compact: true,
			width: '5%'
		},
		{
			name: 'Estado',
			selector: 'estado',
			sortable: true,
			compact: true,
			width: '5%'
		},
		{
			name: 'Año',
			selector: 'ano',
			sortable: true,
			compact: true,
			width: '5%'
		},
		{
			name: 'Tipo Transporte',
			selector: 'propio',
			sortable: true
		},
		{
			name: 'Combistible',
			selector: 'combustible',
			sortable: true
		},

		{
			name: 'Editar',
			selector: 'editar',
			right: true,
			ignoreRowClick: true,
			cell: (row) => (
				<Button className="btn btn-primary" onClick={(e) => selecionarVehiculo(row, 'Editar')}>
					Editar
				</Button>
			)
		},
		{
			name: 'Eliminar',
			selector: 'eliminar',

			ignoreRowClick: true,
			cell: (row) => (
				<Button className="btn btn-danger" onClick={(e) => eliminar(row, e)}>
					Eliminar
				</Button>
			)
		}
	];

	const eliminar = (row, e) => {
		console.log('slect Rows', row.id);
	};

	const selecionarVehiculo = (elemento, caso) => {
		setVehiculoSeleccionado(elemento);
		caso === 'Editar' && setModalEditar(true);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setVehiculoSeleccionado((prevState) => ({
			...prevState,
			[name]: value
		}));
		console.log(vehiculoSeleccionado);
	};
	const abriModalInsertar = () => {
		setModalNuevo(true);
		setVehiculoSeleccionado(null);
	};
	return (
		<React.Fragment>
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Vehiculos</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Inicio</a>
									</li>
									<li className="breadcrumb-item active">Vehiculos</li>
								</ol>
							</div>
						</div>
					</div>
				</div>

				<section class="content">
					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-body">
									<Button variant="success" onClick={() => abriModalInsertar()}>
										Nuevo Vehiculo
									</Button>
									<DataTable columns={columnas} data={data} pagination />
								</div>
							</div>
						</div>
					</div>
					<Modal show={modalEditar}>
						<ModalHeader>
							<div>
								<h3>Editar Vehiculo</h3>
							</div>
						</ModalHeader>
						<ModalBody>
							<Form>
								<Row>
									<Col>
										<Form.Label>Placa:</Form.Label>
										<Form.Control
											placeholder="Numero de Placa"
											name="placa"
											readOnly
											value={vehiculoSeleccionado && vehiculoSeleccionado.placa}
											onChange={handleChange}
										/>
									</Col>
									<Col>
										<Form.Label>Modelo:</Form.Label>
										<Form.Control
											placeholder="Modelo"
											name="modelo"
											value={vehiculoSeleccionado && vehiculoSeleccionado.modelo}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>K.Incial:</Form.Label>
										<Form.Control
											placeholder="Kilometraje Inicial"
											name="kinicial"
											type="number"
											value={vehiculoSeleccionado && vehiculoSeleccionado.kinicial}
											onChange={handleChange}
										/>
									</Col>
									<Col>
										<Form.Label>K.Final:</Form.Label>
										<Form.Control
											placeholder="Kilometraje Final"
											name="kfinal"
											type="number"
											value={vehiculoSeleccionado && vehiculoSeleccionado.kfinal}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>Tipo Transporte:</Form.Label>
										<Form.Control
											placeholder="Tipo de Transporte"
											name="propio"
											value={vehiculoSeleccionado && vehiculoSeleccionado.propio}
											onChange={handleChange}
										/>
									</Col>
									<Col>
										<Form.Label>Año:</Form.Label>
										<Form.Control
											placeholder="Año del Vehiculo"
											name="ano"
											value={vehiculoSeleccionado && vehiculoSeleccionado.ano}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>Tipo Combustible:</Form.Label>
										<Form.Control
											placeholder="Tipo Combustible"
											name="combustible"
											value={vehiculoSeleccionado && vehiculoSeleccionado.combustible}
											onChange={handleChange}
										/>
									</Col>

									<Col>
										<Form.Label>Estado:</Form.Label>
										<Form.Check
											type="checkbox"
											label="Activo"
											name="estado"
											value={vehiculoSeleccionado && vehiculoSeleccionado.estado}
											onChange={handleChange}
										/>
									</Col>
								</Row>
							</Form>
						</ModalBody>
						<ModalFooter>
							<button className="btn btn-primary">Actualizar</button>
							<button className="btn btn-danger" onClick={() => setModalEditar(false)}>
								cancelar
							</button>
						</ModalFooter>
					</Modal>

					<Modal show={modalNuevo}>
						<ModalHeader>
							<div>
								<h3>Nuevo Vehiculo</h3>
							</div>
						</ModalHeader>
						<ModalBody>
							<Form>
								<Row>
									<Col>
										<Form.Label>Placa:</Form.Label>
										<Form.Control
											placeholder="Numero de Placa"
											name="placa"
											value={vehiculoSeleccionado && vehiculoSeleccionado.placa}
											onChange={handleChange}
										/>
									</Col>
									<Col>
										<Form.Label>Modelo:</Form.Label>
										<Form.Control
											placeholder="Modelo"
											name="modelo"
											value={vehiculoSeleccionado && vehiculoSeleccionado.modelo}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>K.Incial:</Form.Label>
										<Form.Control
											placeholder="Kilometraje Inicial"
											name="kinicial"
											type="number"
											value={vehiculoSeleccionado && vehiculoSeleccionado.kinicial}
											onChange={handleChange}
										/>
									</Col>
									<Col>
										<Form.Label>K.Final:</Form.Label>
										<Form.Control
											placeholder="Kilometraje Final"
											name="kfinal"
											type="number"
											value={vehiculoSeleccionado && vehiculoSeleccionado.kfinal}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>Tipo Transporte:</Form.Label>
										<Form.Control
											placeholder="Tipo de Transporte"
											name="propio"
											value={vehiculoSeleccionado && vehiculoSeleccionado.propio}
											onChange={handleChange}
										/>
									</Col>
									<Col>
										<Form.Label>Año:</Form.Label>
										<Form.Control
											placeholder="Año del Vehiculo"
											name="ano"
											type="number"
											min="1800"
											max="2050"
											step="1"
											value={vehiculoSeleccionado && vehiculoSeleccionado.ano}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>Tipo Combustible:</Form.Label>
										<Form.Control
											placeholder="Tipo Combustible"
											name="combustible"
											value={vehiculoSeleccionado && vehiculoSeleccionado.combustible}
											onChange={handleChange}
										/>
									</Col>

									<Col>
										<Form.Label>Estado:</Form.Label>
										<Form.Check
											type="checkbox"
											label="Activo"
											name="estado"
											value={vehiculoSeleccionado && vehiculoSeleccionado.estado}
											onChange={handleChange}
										/>
									</Col>
								</Row>
							</Form>
						</ModalBody>
						<ModalFooter>
							<button className="btn btn-primary">Insertar</button>
							<button className="btn btn-danger" onClick={() => setModalNuevo(false)}>
								cancelar
							</button>
						</ModalFooter>
					</Modal>
				</section>
			</div>
		</React.Fragment>
	);
}
