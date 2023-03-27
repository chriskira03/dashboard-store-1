import React, { Children, useEffect, useState } from 'react';
import { useContext } from 'react';

const userContext = React.createContext();

export function useUserContext() {
	return useContext(userContext);
}

export const UserProvider = (props) => {
	const [product, setProduct] = useState(null);

	function actualizarProducto(id, category, cantidad) {
		if (product === null) {
			setProduct([{ id, category, cantidad }]);
			return;
		}
		let index = product.findIndex(
			(p) => p.id === id && p.category === category
		);
		if (index !== -1) {
			setProduct((prevProductos) => {
				let nuevosProductos = [...prevProductos];
				nuevosProductos[index] = {
					...nuevosProductos[index],
					category,
					cantidad,
				};
				return nuevosProductos;
			});
			return;
		}
		setProduct((prevProductos) => [
			...prevProductos,
			{ id, category, cantidad },
		]);
	}

	function eliminarProducto(id, category) {
		setProduct((prevProductos) => {
			const nuevosProductos = prevProductos.filter(
				(p) => !(p.id === id && p.category === category)
			);
			return nuevosProductos;
		});
	}
	// useEffect(() => {
	// 	console.log(product);
	// }, [product]);

	return (
		<userContext.Provider value={{ actualizarProducto, eliminarProducto, product }}>
			{props.children}
		</userContext.Provider>
	);
};
