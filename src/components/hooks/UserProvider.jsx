import React, { Children, useEffect, useState } from 'react';
import { useContext } from 'react';
import { productos } from '../data/productos';
import axios from 'axios';

const userContext = React.createContext();


export function useUserContext() {
	return useContext(userContext);
}

export const UserProvider = (props) => {
	const url = 'http://localhost:3001/platos';
	const [platos, setPlatos] = useState([]);
	const listarEmpresas = () => {
		axios.get(`${url}`).then((resp) => setPlatos(resp.data));
	};

	const [product, setProduct] = useState(null);

	const { costa } = productos;

	const [data, setData] = useState(costa);

	function añadirProducto(dato) {
		setData((prevProductos) => [...prevProductos, dato]);
	}

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
		<userContext.Provider
			value={{
				actualizarProducto,
				eliminarProducto,
				product,
				añadirProducto,
				data,
			}}>
			{props.children}
		</userContext.Provider>
	);
};
