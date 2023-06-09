import React from 'react';
import Card from '../components/shared/menu/Card';
import { useSelector } from 'react-redux';

export const Menu = ({ category }) => {
	const productos = useSelector((state) => state.userAlmacen).producto;
	return (
		<>
			<p className="text-center text-3xl text-blanco pt-4">
				Menú {category}
			</p>
			<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4 mb-8">
				{productos
					.filter((produc) => produc.category === category)
					.map((produc) => (
						<div>
							<Card productos={produc} />
						</div>
					))}
			</div>
		</>
	);
};
