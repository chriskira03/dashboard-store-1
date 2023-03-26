/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';
import { productos } from '../data/productos';

const Pedidos = ({ product }) => {
	const { id, category, cantidad } = product;
	const { costa } = productos;

	return (
		<>
			{costa
				.filter(
					(costa) => costa.id === id && costa.category === category
				)
				.map((costa) => (
					<div className="rounded-lg bg-primary m-4 pb-1">
						<div className="flex text-blanco px-1 py-4">
							<img
								src={costa.imagen}
								className="max-w-10 max-h-10"
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
							<p className="ml-10">$ {(cantidad * costa.precio).toFixed(2)}</p>
						</div>
						<div className="flex items-center justify-between mx-4 mb-2">
							<form>
								<input
									type="text"
									placeholder="order note..."
									class="bg-tertiary py-2 pl-2 pr-4 w-full rounded-lg text-blanco outline-none"
								/>
							</form>
							<div className="text-sm text-red-600 border p-2 mr-2 border-red-600 rounded-lg">
								<RiDeleteBin6Line />
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Pedidos;
