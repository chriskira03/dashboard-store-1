/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import ResumenPedido from './ResumenPedido';
import { reiniciarOrden } from '../../../store/slices/userReducer';
import { useDispatch } from 'react-redux';

const ResumenOrder = ({ handleClose, orden }) => {
	// const productos = useSelector((state) => state.userAlmacen).producto;
    const dispatch = useDispatch();
	const finalizar = () => {
        dispatch(reiniciarOrden())
		handleClose();
	};
	return (
		<div className="bg-tertiary my-6">
			{/* <div className="bg-primary border rounded-lg border-tertiary m-4"> */}
			<div className="flex justify-between items-center m-8">
				<p className="p-4 text-center text-blanco text-2xl">
					Resumen de Pedido
				</p>
				<button
					onClick={handleClose}
					className="text-sm text-blue-400 border p-2 mx-3 border-blue-300 rounded-lg">
					<AiOutlineLine />
				</button>
			</div>
			{/* </div> */}
			<div>
				{orden.length > 0 && (
					<>
						{orden.map((producto) => {
							return <ResumenPedido product={producto} />;
						})}
					</>
				)}
			</div>
			<div className="flex items-center justify-center mt-6">
				<button
					onClick={finalizar}
					className="hover:bg-secondary hover:text-blanco px-6 py-3 rounded-lg border border-complementary text-secondary bg-tertiary">
					Aceptar
				</button>
			</div>
		</div>
	);
};

export default ResumenOrder;
