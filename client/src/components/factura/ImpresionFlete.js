import React, { useState } from 'react';
import Pdf from 'react-to-pdf';
import DataTable, { createTheme } from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Global from '../../Global';
import Moment from 'react-moment';
const ref = React.createRef();
export default function ImpersionTicket({ flete }) {
	const [ dataTicketProductos, setDataTicketProductos ] = useState([]);
	const [ dataTicket, setDataTicket ] = useState([]);
	const ticket = `FLETE-${flete}.pdf`;
	var url = Global.url;
	var request = `/detalleFlete/${flete}`;

	axios.get(url + request).then((resp) => {
		setDataTicketProductos(resp.data.datos);
	});
	var request2 = `/encabezadoFlete/${flete}`;
	axios.get(url + request2).then((resp) => {
		setDataTicket(resp.data.datos);
	});

	createTheme('solarized', {
		text: {
			primary: '#268bd2',
			secondary: '#2aa198'
		},
		background: {
			default: '#FFFFFF'
		},
		context: {
			background: '#cb4b16',
			text: '#FFFFFF'
		},
		divider: {
			default: '#073642'
		},
		action: {
			button: 'rgba(0,0,0,.54)',
			hover: 'rgba(0,0,0,.08)',
			disabled: 'rgba(0,0,0,.12)'
		},
		rows: {
			fontsize: '8px'
		}
	});

	const customStyles = {
		rows: {
			style: {
				minHeight: '30px' // override the row height
			}
		},
		headCells: {
			style: {
				paddingLeft: '8px', // override the cell padding for head cells
				paddingRight: '8px'
			}
		},
		cells: {
			style: {
				paddingLeft: '8px', // override the cell padding for data cells
				paddingRight: '8px'
			}
		}
	};
	const columnas = [
		{
			name: 'Fatura',
			selector: 'factura',
			compact: true,
			width: '10%'
		},
		{
			name: 'Cliente',
			selector: 'cliente',
			compact: true,
			width: '10%'
		},
		{
			name: 'Nombre',
			selector: 'nombre',
			compact: true,
			width: '45%'
		},
		{
			name: 'Total',
			selector: 'total',
			compact: true,
			width: '15%'
		},
		{
			name: 'Condicion Pag',
			selector: 'DESCRIPCION',
			sortable: true,
			compact: true,
			width: '15%'
		}
	];

	return (
		<React.Fragment>
			<div style={{ margin: '1px 5px 10px 8px' }} ref={ref}>
				<br />
				<p style={{ margin: '1px 1px 2px 250px', alignContent: 'center' }}>FLETE:{flete}</p>
				<p style={{ margin: '1px 1px 1px 250px', alignContent: 'center', fontSize: '12px' }}>
					{Global.empresa}
				</p>
				<p style={{ margin: '1px 1px 1px 250px', alignContent: 'center', fontSize: '12px' }}>
					Motorista:{dataTicket.nombre}-{dataTicket.nombre}
				</p>
				<p style={{ margin: '1px 1px 1px 250px', alignContent: 'center', fontSize: '12px' }}>
					Estado:{dataTicket.estado}
				</p>
				<p style={{ margin: '1px 1px 1px 250px', alignContent: 'center', fontSize: '12px' }}>
					Fecha Creacion:<Moment format="DD/MM/YYYY H:MM">{dataTicket.fecha}</Moment>
				</p>
				<div style={{ marginLeft: '10px' }}>
					<DataTable columns={columnas} data={dataTicketProductos} customStyles={customStyles} pagination />
				</div>
			</div>
			<Pdf targetRef={ref} filename={ticket}>
				{({ toPdf }) => <Button onClick={toPdf}>Generar a Pdf</Button>}
			</Pdf>
		</React.Fragment>
	);
}
