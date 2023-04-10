import React from 'react';

import { useSelector } from 'react-redux';
import Card from './Card';

export const MenuPrincipal = () => {
	const productos = useSelector((state) => state.userAlmacen).producto;
	return (
		<>
			<p className="text-center text-3xl text-blanco pt-4">
				Menú Principal
			</p>
			<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4 mb-8">
				{productos.map((produc) => (
					<div>
						<Card productos={produc} />
					</div>
				))}
			</div>
		</>
	);
};
