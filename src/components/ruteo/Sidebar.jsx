/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
	RiHome6Line,
	RiPieChartLine,
	RiLogoutCircleRLine,
	RiRestaurantLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	const [seleccionado, setSeleccionado] = useState(1);

	const capa = 'p-4 rounded-tl-xl flex justify-center group hover:bg-primary';
	const boton =
		'p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary';

	const capa2 = 'bg-primary p-4 rounded-tl-xl flex justify-center my-2';
	const boton2 = 'bg-secondary text-blanco p-4 rounded-xl ';

	const seleccionarBoton = (id) => {
		setSeleccionado(id);
	};
	return (
		<div className={`bg-tertiary  flex flex-col justify-between py-6`}>
			<nav>
				<ul className="pl-4 ">
					<li className={`${seleccionado === 1 ? capa2 : capa}`}>
						<Link
							className={`${seleccionado === 1 ? boton2 : boton}`}
							onClick={() => {
								seleccionarBoton(1);
							}}
							to="/">
							<RiHome6Line className="text-2xl" />
						</Link>
					</li>
					<li className={`${seleccionado === 2 ? capa2 : capa}`}>
						<Link
							className={`${seleccionado === 2 ? boton2 : boton}`}
							onClick={() => seleccionarBoton(2)}
							to="menu/">
							<RiRestaurantLine className="text-2xl " />
						</Link>
					</li>
					<li className={`${seleccionado === 3 ? capa2 : capa}`}>
						<Link
							className={`${seleccionado === 3 ? boton2 : boton}`}
							onClick={() => {
								seleccionarBoton(3);
							}}
							to="data-productos/">
							<RiPieChartLine className="text-2xl" />
						</Link>
					</li>
				</ul>
			</nav>
			<div>
				<ul className="pl-4">
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiLogoutCircleRLine className="text-2xl" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
