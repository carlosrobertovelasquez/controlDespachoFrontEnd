import React from 'react';

export default function Footer() {
	let url = '';
	return (
		<footer className="main-footer">
			<strong>
				Copyright &copy; 2014-2021 <a href={url}>Control Despacho</a>.
			</strong>
			All rights reserved.
			<div className="float-right d-none d-sm-inline-block">
				<b>Version</b> 1.0.4
			</div>
		</footer>
	);
}
