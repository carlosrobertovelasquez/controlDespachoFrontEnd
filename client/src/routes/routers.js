//Layouds
import LayoutBasic from '../layouts/LayoutBasic';
import LayoutPantallaCompleta from '../layouts/LayoutPantallaCompleta';
//Pages
import Home from '../pages/Home';
import Motoristas from '../pages/Motoristas';
import Vehiculos from '../pages/Vehiculos';
import Preparadores from '../pages/Preparadores';
import Pedidos from '../pages/Pedidos';
import Ticket from '../pages/Ticket';
import Fletes from '../pages/Fletes';
import Facturas from '../pages/Facturas';
import Admin from '../pages/Admin';
import GraficosTicket from '../pages/Graficos/GraficosTicket';
import GraficosFlete from '../pages/Graficos/GraficosFlete';
import Error404 from '../pages/Error404';
import AutorizacionPedido from '../pages/AutorizacionPedido';
import ConsultaFletes from '../pages/Consulta/ConsultaFlete';
import ConsultaTickets from '../pages/Consulta/ConsultaTickets';
import ConsultaLiquidaciones from '../pages/Consulta/ConsultaLiquidacion';
import PantallaCompletaTicket from '../pages/Consulta/PantallaCompletaTicket';
import Liquidacion from '../pages/Liquidacion';
const routes = [
	{
		path: '/',
		layout: LayoutBasic,
		component: Home,
		exact: true
	},
	{
		path: '/motoristas',
		layout: LayoutBasic,
		component: Motoristas,
		exact: true
	},
	{
		path: '/vehiculos',
		layout: LayoutBasic,
		component: Vehiculos,
		exact: true
	},
	{
		path: '/preparadores',
		layout: LayoutBasic,
		component: Preparadores,
		exact: true
	},
	{
		path: '/pedidos',
		layout: LayoutBasic,
		component: Pedidos,
		exact: true
	},
	{
		path: '/autorizacion',
		layout: LayoutBasic,
		component: AutorizacionPedido,
		exact: true
	},
	{
		path: '/ticket',
		layout: LayoutBasic,
		component: Ticket,
		exact: true
	},
	{
		path: '/flete',
		layout: LayoutBasic,
		component: Fletes,
		exact: true
	},
	{
		path: '/factura',
		layout: LayoutBasic,
		component: Facturas,
		exact: true
	},
	{
		path: '/liquidacion',
		layout: LayoutBasic,
		component: Liquidacion,
		exact: true
	},
	{
		path: '/admin',
		layout: LayoutBasic,
		component: Admin,
		exact: true
	},
	{
		path: '/graficosTicket',
		layout: LayoutBasic,
		component: GraficosTicket,
		exact: true
	},
	{
		path: '/graficosFlete',
		layout: LayoutBasic,
		component: GraficosFlete,
		exact: true
	},
	{
		path: '/consultaFletes',
		layout: LayoutBasic,
		component: ConsultaFletes,
		exact: true
	},
	{
		path: '/consultaTickets',
		layout: LayoutBasic,
		component: ConsultaTickets,
		exact: true
	},
	{
		path: '/consultaLiquidaciones',
		layout: LayoutBasic,
		component: ConsultaLiquidaciones,
		exact: true
	},
	{
		path: '/pantallaCompletaTickets',
		layout: LayoutPantallaCompleta,
		component: PantallaCompletaTicket,
		exact: true
	},
	{
		layout: LayoutBasic,
		component: Error404
	}
];

export default routes;
