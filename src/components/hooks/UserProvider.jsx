import React, { Children, useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';

const userContext = React.createContext();

export function useUserContext() {
	return useContext(userContext);
}

export const UserProvider = (props) => {
	const url = 'http://localhost:3001/platos';

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

	return (
		<userContext.Provider
			value={{
				platos,
				añadirProducto,
				actualizarProductos,
				deleteProductos,
				actualizarProducto,
				eliminarProducto,
				product,
			}}>
			{props.children}
		</userContext.Provider>
	);
};
