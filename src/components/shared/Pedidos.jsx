/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineLine } from 'react-icons/ai';
import { useUserContext } from '../hooks/UserProvider';

const Pedidos = ({ product }) => {
	const { id, category, cantidad } = product;

	const { actualizarProducto, eliminarProducto, platos } = useUserContext();

	const actualizarResta = () => {
		if (cantidad > 1) {
			actualizarProducto(id, category, cantidad - 1);
		} else {
			eliminarProducto(id, category);
		}
	};
	const eliminar = () => {
		eliminarProducto(id, category);
	};
	return (
		<>
			{platos
				.filter(
					(costa) => costa.id === id && costa.category === category
				)
				.map((costa) => (
					<div className="rounded-lg bg-primary m-4 pb-1">
						<div className="flex text-blanco px-1 py-4">
							<img
								src={costa.imagen}
								className="w-10 h-10 object-cover shadow-2xl rounded-full mx-2"
							/>
							<div className="max-w-[100px]">
								<p className="truncate text-[14px]">
									{costa.descripcion}
								</p>
								<p className="text-complementary text-[12px]">
									{costa.precio}
								</p>
							</div>
							<p className="ml-8">{cantidad}</p>
							<p className="ml-10">
								$ {(cantidad * costa.precio).toFixed(2)}
							</p>
						</div>
						<div className="flex items-center justify-between mx-4 mb-2">
							<form>
								<input
									type="text"
									placeholder="order note..."
									class="bg-tertiary py-2 pl-2 pr-4 w-full rounded-lg text-blanco outline-none"
								/>
							</form>
							<button
								onClick={actualizarResta}
								className="text-sm text-blue-400 border p-2 mr-2 border-blue-300 rounded-lg">
								<AiOutlineLine />
							</button>
							<button
								onClick={eliminar}
								className="text-sm text-red-600 border p-2 mr-2 border-red-600 rounded-lg">
								<RiDeleteBin6Line />
							</button>
						</div>
					</div>
				))}
		</>
	);
};

export default Pedidos;
