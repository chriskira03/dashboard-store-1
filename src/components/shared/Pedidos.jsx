/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';

const Pedidos = (props) => {
    const {id, imagen, descripcion, precio, cantidad} =props;
	return (
		<>
			<div className="rounded-lg bg-primary m-4 pb-1">
				<div className="flex text-blanco px-1 py-4">
					<img src="comida.png" className="max-w-10 max-h-10" />
					<div className="max-w-[100px]">
						<p className="truncate text-[14px]">
							Arroz con pollo y huevo
						</p>
						<p className="text-complementary text-[12px]">
							$. 45.5
						</p>
					</div>
					<p className="ml-8">2</p>
					<p className="ml-10">$ {cantidad * precio}</p>
				</div>
				<div className="flex items-center justify-between mx-4 mb-2">
					<form>
						<input
							type="text"
							placeholder="order note..."
							class="bg-tertiary py-2 pl-2 pr-4 w-full rounded-lg text-blanco outline-none"
						/>
					</form>
					<div className="text-sm text-red-600 border p-2 mr-2 border-red-600 rounded-lg">
						<RiDeleteBin6Line />
					</div>
				</div>
			</div>
		</>
	);
};

export default Pedidos;
