/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import { useUserContext } from '../../hooks/UserProvider';

const Card = (props) => {
	const isMounted = useRef(false);
	const { actualizarProducto } = useUserContext();
	const { imagen, descripcion, precio, id, category, nombre } = props;
	const [pedido, setPedido] = useState(0);
	// const pedir = () => {
	// 	setPedido(1);
	// };
	const actualizar = () => {
		actualizarProducto(id, category, 1);
	};
	// useEffect(() => {
	// 	if (isMounted.current) {
	// 		actualizarProducto(id, category, pedido);
	// 	} else {
	// 		isMounted.current = true;
	// 	}
	// }, [isMounted, pedido]);

	return (
		<>
			<div className="bg-tertiary text-blanco mt-24 min-w-[350px]">
				<div className="p-8 rounded-xl bg-red flex flex-col items-center gap-x-8 text-center">
					<img
						src={imagen}
						className="flex-shrink-0 w-40 h-40 object-cover shadow-2xl rounded-full -mt-20"
					/>
					<h1 className="text-xl">{nombre}</h1>
					<h1 className="text-complementary text-sm">$/. {precio}</h1>
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
