import React from 'react';
import { useUserContext } from '../components/hooks/UserProvider';
import Card from '../components/shared/menu/Card';

export const Menu = () => {
	const { platos } = useUserContext();
	return (
		<>
			<p className="text-center text-3xl text-blanco pt-4">
				Menú Principal
			</p>
			<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4 mb-8">
				{platos.map((produc) => (
					<div>
						{/* <p>Cantidad es: {platos.length}</p> */}

						<Card
							imagen={produc.imagen}
							descripcion={produc.descripcion}
							precio={produc.precio}
							id={produc.id}
							category={produc.category}
							nombre={produc.nombre}
						/>
					</div>
				))}
			</div>
		</>
	);
};
