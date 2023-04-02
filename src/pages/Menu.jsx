import React from 'react';
import { useUserContext } from '../components/hooks/UserProvider';
import Card from '../components/shared/Card';

export const Menu = () => {
	const { platos } = useUserContext();
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
