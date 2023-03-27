import React from 'react';
import { productos } from '../components/data/productos';
import Card from '../components/shared/Card';

export const Menu = () => {
	const { costa } = productos;
	return (
		<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4">
			{costa.map((produc) => (
				<div>
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
