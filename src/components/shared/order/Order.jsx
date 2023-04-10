import React, { useState } from 'react';
import Pedidos from './Pedidos';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const Order = ({ setSidebar, sidebar }) => {

	const orden = useSelector((state)=>state.userAlmacen).orden;

	return (
		<>
			<div
				className={
					sidebar
						? 'bg-negroPuro cursor-pointer fixed z-20 inset-0 opacity-50 visible'
						: 'opacity-0 hidden transition-opacity duration-1000'
				}
				onClick={() => setSidebar(!sidebar)}></div>
			<div />
			<div
				className={
					sidebar
						? 'h-screen bg-tertiary md:bg-primary fixed inset-y-0 md:w-[400px] w-full duration-300 transition-left z-30 left-0'
						: 'h-screen bg-tertiary md:bg-primary fixed inset-y-0 w-64 duration-300 transition-left z-30 -left-80'
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
					{orden.length > 0 && (
						<>
							{orden.map((producto) => {
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
