/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
	RiHome6Line,
	RiPieChartLine,
	RiLogoutCircleRLine,
	RiRestaurantLine,
	RiCloseLine
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	const [seleccionado, setSeleccionado] = useState(1);

	// const capa = 'p-4 rounded-tl-xl flex justify-center group hover:bg-primary';
	// const boton =
	// 	'p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary';

	// const capa2 = 'bg-primary p-4 rounded-tl-xl flex justify-center my-2';
	// const boton2 = 'bg-secondary text-blanco p-4 rounded-xl ';

	const capa = 'p-4 rounded-tl-xl flex justify-center group hover:bg-primary';
	const boton =
		'p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary';

	const capa2 = 'bg-primary p-4 rounded-tl-xl flex justify-center my-2';
	const boton2 = 'bg-secondary text-blanco p-4 rounded-xl ';

	const seleccionarBoton = (id) => {
		setSeleccionado(id);
	};
	return (
		<div className={`bg-tertiary  w-full `}>
			<nav>
				<ul className="flex items-center justify-center space-x-12 border rounded-2xl mx-40 py-4">
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							onClick={() => {
								seleccionarBoton(1);
							}}
							to="/">
							<RiHome6Line className="text-3xl" />
							<p>COSTA</p>
						</Link>
					</li>
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							onClick={() => seleccionarBoton(2)}
							to="menu/">
							<RiRestaurantLine className="text-3xl " />
							<p>SIERRA</p>
						</Link>
					</li>
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							onClick={() => {
								seleccionarBoton(3);
							}}
							to="data-productos/">
							<RiPieChartLine className="text-3xl" />
							<p>SELVA</p>
						</Link>
					</li>
					{/* <li className={`${seleccionado === 3 ? capa2 : capa}`}>
						<Link
							className={`${seleccionado === 3 ? boton2 : boton}`}
							onClick={() => {
								seleccionarBoton(3);
							}}
							to="data-productos/">
							<RiPieChartLine className="text-2xl" />
							<p>Selva</p>
						</Link>
					</li> */}
				</ul>
			</nav>
			{/* <div>
				<ul className="pl-4">
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiLogoutCircleRLine className="text-2xl" />
						</a>
					</li>
				</ul>
			</div> */}
		</div>
	);
};

export default Sidebar;
