import React from 'react';
import { useUserContext } from '../../hooks/UserProvider';
import Pedidos from './Pedidos';

const Order = () => {
	const { product, reiniciarPedido } = useUserContext();
	const registro = () => {
		let x = window.confirm(`Registro exitoso`);
		if (x) {
			reiniciarPedido();
		}
	};

	return (
		<>
			<div className="pt-6">
				<p className="pb-8 pl-4 text-xl text-blanco"> Orders #3286</p>
				<div className="flex items-center justify-evenly gap-2 pb-4">
					{/* <button className="bg-secondary text-blanco px-3 py-1 rounded-lg border border-complementary">
						Ordenes
					</button> */}
					{/* <button className="hover:bg-secondary hover:text-blanco px-3 py-1 rounded-lg border border-complementary text-secondary bg-tertiary">
						To go
					</button>
					<button className="hover:bg-secondary hover:text-blanco px-3 py-1 rounded-lg border border-complementary text-secondary bg-tertiary">
						Delivery
					</button> */}
				</div>
			</div>
			<hr></hr>
			<div className="py-5">
				<div className="flex justify-between text-blanco px-10 text-sm">
					<p className="p-2">Item</p>
					<p className="ml-32 p-2">Cantidad</p>
					<p className=" p-2">Precio</p>
				</div>
			</div>
			<hr></hr>
			<div>
				{product.length > 0 ? (
					<>
						{product.map((producto) => {
							return <Pedidos product={producto} />;
						})}
						<div className="flex items-center justify-center mt-6">
							<button
								className="hover:bg-secondary hover:text-blanco px-6 py-3 rounded-lg border border-complementary text-secondary bg-tertiary"
								onClick={registro}>
								Envíar Pedido
							</button>
						</div>
					</>
				) : (
					<p className="text-center text-blanco text-2xl py-4">
						Registro de Ordenes
					</p>
				)}
			</div>
		</>
	);
};

export default Order;
