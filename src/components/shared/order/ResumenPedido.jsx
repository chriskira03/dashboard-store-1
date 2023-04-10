/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineLine } from 'react-icons/ai';
import {
	actualizarOrden,
	eliminarOrden,
} from '../../../store/slices/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const ResumenPedido = ({ product }) => {
	const { id, category, cantidad } = product;

	const productos = useSelector((state) => state.userAlmacen).producto;
	return (
		<>
			{productos
				.filter(
					(costa) => costa.id === id && costa.category === category
				)
				.map((costa) => (
					<div className="rounded-lg bg-primary m-4 pb-1">
						<div className="flex item justify-around text-blanco px-1 py-4">
							<img
								src={costa.imagen}
								className="w-24 h-24 object-cover shadow-2xl rounded-full mx-2"
							/>
							<div className="grid grid-cols-12">
								<div className="max-w-[200px] col-span-6">
									<p className="truncate text-[14px] ">
										{costa.nombre}
									</p>
									<p className="text-complementary text-[12px] ">
										$/. {costa.precio}
									</p>
								</div>
								<p className="ml-8 col-span-1">{cantidad}</p>
								<p className="ml-10 col-span-5 text-[12px]">
									$/. {(cantidad * costa.precio).toFixed(2)}
								</p>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default ResumenPedido;
