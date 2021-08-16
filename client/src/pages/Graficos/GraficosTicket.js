import React from 'react';

export default function GraficosTicket() {
	return (
		<React.Fragment>
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Grafico Ticket</h1>
							</div>

							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Inicio</a>
									</li>

									<li className="breadcrumb-item active">GraficoTicket</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<section className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<div className="card card-primary">
									<div className="card-header">
										<h3 className="card-title">Area Chart</h3>

										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus" />
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times" />
											</button>
										</div>
									</div>
									<div className="card-body">
										<div className="chart">
											<canvas
												id="areaChart"
												style={{
													minheight: '250px',
													height: '250px',
													maxheight: '250px',
													maxwidth: '100%'
												}}
											/>
										</div>
									</div>
								</div>

								<div className="card card-danger">
									<div className="card-header">
										<h3 className="card-title">Donut Chart</h3>

										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus" />
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times" />
											</button>
										</div>
									</div>
									<div className="card-body">
										<canvas
											id="donutChart"
											style={{
												minheight: '250px',
												height: '250px',
												maxheight: '250px',
												maxwidth: '100%'
											}}
										/>
									</div>
								</div>

								<div className="card card-danger">
									<div className="card-header">
										<h3 className="card-title">Pie Chart</h3>

										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus" />
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times" />
											</button>
										</div>
									</div>
									<div className="card-body">
										<canvas
											id="pieChart"
											style={{
												minheight: '250px',
												height: '250px',
												maxheight: '250px',
												maxwidth: '100%'
											}}
										/>
									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="card card-info">
									<div className="card-header">
										<h3 className="card-title">Line Chart</h3>

										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus" />
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times" />
											</button>
										</div>
									</div>
									<div className="card-body">
										<div className="chart">
											<canvas
												id="lineChart"
												style={{
													minheight: '250px',
													height: '250px',
													maxheight: '250px',
													maxwidth: '100%'
												}}
											/>
										</div>
									</div>
								</div>

								<div className="card card-success">
									<div className="card-header">
										<h3 className="card-title">Bar Chart</h3>

										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus" />
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times" />
											</button>
										</div>
									</div>
									<div className="card-body">
										<div className="chart">
											<canvas
												id="barChart"
												style={{
													minheight: '250px',
													height: '250px',
													maxheight: '250px',
													maxwidth: '100%'
												}}
											/>
										</div>
									</div>
								</div>

								<div className="card card-success">
									<div className="card-header">
										<h3 className="card-title">Stacked Bar Chart</h3>

										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus" />
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times" />
											</button>
										</div>
									</div>
									<div className="card-body">
										<div className="chart">
											<canvas
												id="stackedBarChart"
												style={{
													minheight: '250px',
													height: '250px',
													maxheight: '250px',
													maxwidth: '100%'
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
}
