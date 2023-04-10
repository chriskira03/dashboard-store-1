import React from 'react';
import { RiPieChartLine, RiSearch2Line, RiTakeawayLine } from 'react-icons/ri';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FechaActual() {
	const [fecha, setFecha] = useState('');

	useEffect(() => {
		const date = new Date();
		const dia = date.getDate();
		const mes = date.toLocaleString('default', { month: 'long' });
		const anio = date.getFullYear();
		setFecha(`${dia} de ${mes} del ${anio}`);
	}, []);

	return fecha;
}

const Header = ({ setSidebar, sidebar }) => {
	const orden = useSelector((state) => state.userAlmacen).orden;
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<div className="flex justify-between items-center w-full px-6">
				<div className="">
					<Link
						className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
						to="/">
						<p className="text-2xl font-bold text-blanco">
							Christian Valdivia
						</p>
					</Link>
					<p className="pt-1 text-complementary">{FechaActual()}</p>
				</div>

				<form>
					<div className="inline-flex items-center bg-tertiary rounded-lg">
						<span className="py-2 px-4 rounded-lg text-blanco">
							<RiSearch2Line />
						</span>
						<input
							type="text"
							placeholder="Search"
							className="bg-tertiary py-2 pl-0 pr-4 w-full rounded-lg text-blanco outline-none"
						/>
					</div>
				</form>
				<div className="">
					<Link
						className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
						to="data-productos/">
						<RiPieChartLine className="text-3xl" />
						<p>ADD PRODUCT</p>
					</Link>
				</div>
				<div className="cursor-pointer" onClick={handleSidebar}>
					<span className="notification">{orden.length}</span>
					{console.log(orden)}
					<RiTakeawayLine className="text-3xl text-blanco" />
				</div>
			</div>
		</>
	);
};

export default Header;
