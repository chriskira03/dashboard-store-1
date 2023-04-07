import React from 'react';
import { RiSearch2Line, RiTakeawayLine } from 'react-icons/ri';

import { useState, useEffect } from 'react';
import { useUserContext } from '../hooks/UserProvider';

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
	const [pedido, setPedido] = useState(0);
	const actualizar = (n) => {
		setPedido(n);
	};
	const { product } = useUserContext();
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<div className="flex justify-between items-center w-full px-6">
				<div className="">
					<h1 className="text-2xl font-bold text-blanco">
						Christian Valdivia
					</h1>
					<p className="pt-1 text-complementary">{FechaActual()}</p>
				</div>
				<form>
					<div class="inline-flex items-center bg-tertiary rounded-lg">
						<span class="py-2 px-4 rounded-lg text-blanco">
							<RiSearch2Line />
						</span>
						<input
							type="text"
							placeholder="Search"
							class="bg-tertiary py-2 pl-0 pr-4 w-full rounded-lg text-blanco outline-none"
						/>
					</div>
				</form>
				<div className="cursor-pointer" onClick={handleSidebar}>
					<span className="notification">{product.length}</span>
					<RiTakeawayLine className="text-3xl text-blanco" />
				</div>
			</div>
		</>
	);
};

export default Header;
