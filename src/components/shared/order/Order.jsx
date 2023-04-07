import React, { useState } from 'react';
import { useUserContext } from '../../hooks/UserProvider';
import Pedidos from './Pedidos';
import { RiCloseLine } from 'react-icons/ri';

const Order = ({ setSidebar, sidebar }) => {
	const { product } = useUserContext();

	return (
		<>
			{/* <div
				className={
					sidebar
						? 'bg-negroPuro cursor-pointer fixed z-20 inset-0 opacity-50 visible'
						: 'opacity-0 hidden transition-opacity duration-1000'
				}
				onClick={() => setSidebar(!sidebar)}></div>
			<div /> */}
			<div
				className={
					sidebar
						? 'h-screen bg-tertiary md:bg-primary fixed  md:w-80 w-full duration-300 transition-left z-30 left-0'
						: 'h-screen bg-tertiary md:bg-primary fixed  w-64 duration-300 transition-left z-30 -left-80'
				}>
				<div className="flex items-center justify-between px-3">
					<p className="text-center text-blanco text-2xl py-4">
						Registro de Ordenes
					</p>
					<button
						className="text-red-500 text-2xl border m-2 rounded-xl p-1"
						onClick={() => setSidebar(false)}>
						<RiCloseLine className="" />
					</button>
				</div>
				<div>
					{product.length > 0 && (
						<>
							{product.map((producto) => {
								return <Pedidos product={producto} />;
							})}
							<div className="flex items-center justify-center mt-6">
								<button className="hover:bg-secondary hover:text-blanco px-6 py-3 rounded-lg border border-complementary text-secondary bg-tertiary">
									Envíar Pedido
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Order;
