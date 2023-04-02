import React, { useEffect, useState } from 'react';
import { productos } from '../components/data/productos';
import { useUserContext } from '../components/hooks/UserProvider';
import Card from '../components/shared/Card';
import axios from 'axios';

export const Menu = () => {
	const { data } = useUserContext();
	// const { costa } = productos;
	const url = 'http://localhost:3001/platos';
	const [platos, setPlatos] = useState([]);
	const listarEmpresas = () => {
		axios.get(`${url}`).then((resp) => setPlatos(resp.data));
	};
	useEffect(() => {
		listarEmpresas();
	}, []);

	return (
		<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4">
			{platos.map((produc) => (
				<div>
					<p>Cantidad es: {platos.length}</p>
					<Card
						imagen={produc.imagen}
						descripcion={produc.descripcion}
						precio={produc.precio}
						id={produc.id}
						category={produc.category}
					/>
				</div>
			))}
		</div>
	);
};
