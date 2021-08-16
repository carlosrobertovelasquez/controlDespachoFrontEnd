import React from 'react';

import { Container, Alert } from 'react-bootstrap';

import Flete from './Flete';

export default function Tablero({ data }) {
	return (
		<React.Fragment>
			{data.length === 0 ? (
				<Container>
					<Alert variant="success">
						<Alert.Heading>No Existen Fletes Por Procesar</Alert.Heading>
						<p>Gracias por esperar .En unos minutos se realiza la carga</p>
						<hr />
						<p className="mb-0">Control de Despacho</p>
					</Alert>
				</Container>
			) : (
				<React.Fragment>
					{data.map((fbb, i) => {
						return (
							<div key={i} className="col-lg-3 col-6">
								<Flete fbb={fbb} />
							</div>
						);
					})}
				</React.Fragment>
			)}
		</React.Fragment>
	);
}
