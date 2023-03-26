import React, { useState } from 'react';
import Card from './Card';
import { productos } from '../data/productos';

const Cards = () => {
	const { costa } = productos;
	return (
		<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4">
			{costa.map((produc) => (
				<div>
					<Card
						imagen={produc.imagen}
						descripcion={produc.descripcion}
						precio={produc.precio}
					/>
				</div>
			))}
		</div>
	);
};

export default Cards;
