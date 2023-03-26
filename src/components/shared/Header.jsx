import React from 'react';
import { RiSearch2Line, RiArrowDownSLine } from 'react-icons/ri';

import { useState, useEffect } from 'react';

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

const Header = () => {
	const [pedido, setPedido] = useState(0);
	const actualizar = (n) => {
		setPedido(n);
	};
	return (
		<>
			<header className="flex items-center justify-between p-4 bg-primary">
				<div className="pl-6 pt-2">
					<h1 className="text-2xl font-bold text-blanco">
						Christian Valdivia
					</h1>
					<p className="pt-1 text-complementary">{FechaActual()}</p>
				</div>
				<form>
					<div class="inline-flex items-center bg-tertiary rounded-lg">
						<span class="py-2 px-4 rounded-lg text-blanco">
							<RiSearch2Line actualizar={actualizar} />
						</span>
						<input
							type="text"
							placeholder="Search"
							class="bg-tertiary py-2 pl-0 pr-4 w-full rounded-lg text-blanco outline-none"
						/>
					</div>
				</form>
			</header>
		</>
	);
};

export default Header;
