import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3001/platos';
// const url='https://servidor-json-public.vercel.app/platos';

export const contadorSlice = createSlice({
	name: 'userAlmacen',
	initialState: {
		producto: [],
		orden: [],
	},
	reducers: {
		setProducto: (state, action) => {
			state.producto = action.payload;
		},
		setOrden: (state, action) => {
			state.orden = action.payload;
		},
	},
});

export const { setProducto, setOrden } = contadorSlice.actions;

export default contadorSlice.reducer;

export const listarProductos = () => {
	return (dispatch) => {
		axios.get(`${url}`).then((resp) => dispatch(setProducto(resp.data)));
	};
};

export function añadirProducto(dato) {
	return (dispatch) => {
		axios.post(`${url}/`, dato).then((resp) => {
			dispatch(listarProductos());
		});
	};
}
export const actualizarProductos = (dato) => {
	return (dispatch) => {
		axios.put(`${url}/${dato.id}`, dato).then((resp) => {
			dispatch(listarProductos());
		});
	};
};
export const deleteProductos = (dato) => {
	return (dispatch) => {
		axios.delete(`${url}/${dato.id}`).then((resp) => {
			dispatch(listarProductos());
		});
	};
};
//funcione flecha para ordenes
export const actualizarOrden2 = (id, category, cantGeneral, value) => {
	return async (dispatch, getState) => {
		const orden = getState().userAlmacen.orden;
		// console.log(orden);
		if (orden.length === 0) {
			dispatch(setOrden([...orden, { id, category, cantidad: 1 }]));
			return;
		}

		let index = orden.findIndex(
			(p) => p.id === id && p.category === category
		);

		if (index !== -1) {
			let cantidadActual = orden[index].cantidad;
			if (cantidadActual < cantGeneral) {
				const actualizar = orden.map((p) => {
					if (p.id === id && p.category === category) {
						return { ...p, cantidad: cantidadActual + value };
					}
					return p;
				});
				dispatch(setOrden(actualizar));
				return;
			} else {
				alert('Cantidad insificiente');
				return;
			}
		}
		dispatch(setOrden([...orden, { id, category, cantidad: 1 }]));
	};
};
export const actualizarOrden = (id, category, value) => {
	return async (dispatch, getState) => {
		const orden = getState().userAlmacen.orden;
		console.log(orden);
		if (orden.length === 0) {
			dispatch(setOrden([...orden, { id, category, cantidad: 1 }]));
			return;
		}
		let index = orden.findIndex(
			(p) => p.id === id && p.category === category
		);
		if (index !== -1) {
			let cantidadActual = orden[index].cantidad;

			const actualizar = orden.map((p) => {
				if (p.id === id && p.category === category) {
					return { ...p, cantidad: cantidadActual + value };
				}
				return p;
			});
			dispatch(setOrden(actualizar));
			return;
		}
		dispatch(setOrden([...orden, { id, category, cantidad: 1 }]));
	};
};
export const eliminarOrden = (id, category) => {
	return (dispatch, getState) => {
		const orden = getState().userAlmacen.orden;
		const nuevosProductos = orden.filter(
			(p) => !(p.id === id && p.category === category)
		);
		dispatch(setOrden(nuevosProductos));
	};
};
export const reiniciarOrden = () => {
	return (dispatch) => {

		
		dispatch(setOrden([]));
	};
};
