import React, { Children, useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';

const userContext = React.createContext();

export function useUserContext() {
	return useContext(userContext);
}

export const UserProvider = (props) => {
	// const url = 'http://localhost:3001/platos';
	const url = 'https://servidor-json-public.vercel.app/platos';

	const [platos, setPlatos] = useState([]);
	const listarPlatos = () => {
		axios.get(`${url}`).then((resp) => setPlatos(resp.data));
	};
	useEffect(() => {
		listarPlatos();
	}, []);

	function añadirProducto(dato) {
		axios.post(`${url}/`, dato).then((resp) => {
			listarPlatos();
		});
	}

	const actualizarProductos = (dato) => {
		axios.put(`${url}/${dato.id}`, dato).then((resp) => {
			listarPlatos();
		});
	};

	const deleteProductos = (dato) => {
		let confirmar = window.confirm(
			`Desea eliminar la empresa: ${dato.nombre} cuya categoria es: ${dato.category}`
		);
		if (confirmar) {
			axios.delete(`${url}/${dato.id}`).then((resp) => {
				listarPlatos();
			});
		}
	};

	const [product, setProduct] = useState([]);
	function actualizarProducto(id, category, value) {
		if (product.length === 0) {
			setProduct((prevProductos) => [
				...prevProductos,
				{ id, category, cantidad: 1 },
			]);
			return;
		}
		let index = product.findIndex(
			(p) => p.id === id && p.category === category
		);
		if (index !== -1) {
			let cantidadActual = product[index].cantidad;
			setProduct((prevProductos) => {
				let nuevosProductos = [...prevProductos];
				nuevosProductos[index] = {
					...nuevosProductos[index],
					category,
					cantidad: cantidadActual + value,
				};
				return nuevosProductos;
			});
			return;
		}
		setProduct((prevProductos) => [
			...prevProductos,
			{ id, category, cantidad: 1 },
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
	const reiniciarPedido = () => {
		setProduct([]);
	};

	return (
		<userContext.Provider
			value={{
				platos,
				añadirProducto,
				actualizarProductos,
				deleteProductos,
				actualizarProducto,
				eliminarProducto,
				reiniciarPedido,
				product,
			}}>
			{props.children}
		</userContext.Provider>
	);
};
