/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { actualizarOrden2 } from '../../../store/slices/userReducer';
import { useDispatch } from 'react-redux';

const Card = (props) => {
	const { productos } = props;
	const dispatch = useDispatch();
	const actualizar = () => {
		if (productos.cantidad > 0) {
			dispatch(
				actualizarOrden2(
					productos.id,
					productos.category,
					productos.cantidad,
					1
				)
			);
		} else {
			alert(`Cantidad del menu ${productos.nombre} insuficiente`);
		}
	};

	return (
		<>
			<div className="bg-tertiary text-blanco mt-24 min-w-[350px]">
				<div className="p-8 rounded-xl bg-red flex flex-col items-center gap-x-8 text-center">
					<img
						src={productos.imagen}
						className="flex-shrink-0 w-40 h-40 object-cover shadow-2xl rounded-full -mt-20"
					/>
					<h1 className="text-xl">{productos.nombre}</h1>
					<h1 className="text-complementary text-sm">
						$/. {productos.precio}
					</h1>
					<h1 className="text-complementary text-sm">
						Stock: {productos.cantidad}
					</h1>
					<button
						onClick={actualizar}
						className="hover:bg-secondary hover:text-blanco px-3 py-1 mt-4 rounded-lg border border-complementary text-secondary bg-tertiary">
						Ordenar Pedido
					</button>
				</div>
			</div>
		</>
	);
};

export default Card;
