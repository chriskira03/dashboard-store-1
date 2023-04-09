import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiAddFill, RiDeleteBin6Line } from 'react-icons/ri';
import { Box, Modal } from '@mui/material';
import UpdateProduct from '../components/shared/data-productos/UpdateProduct';
import NewProduct from '../components/shared/data-productos/NewProduct';
import { deleteProductos } from '../store/slices/userReducer';
import { useDispatch, useSelector } from 'react-redux';
const DataProductos = () => {
	const [variable, setVariable] = useState({});
	const productos = useSelector((state) => state.userAlmacen).producto;
	const dispatch = useDispatch();

	const eliminarProduct = (dato) => {
		let confirmar = window.confirm(
			`Desea eliminar la empresa: ${dato.nombre} cuya categoria es: ${dato.category}`
		);
		if (confirmar) {
			dispatch(deleteProductos(dato));
		}
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
		setPaso(true);
	};
	const handleClose = () => setOpen(false);
	const [paso, setPaso] = useState(true);

	const funcionUpdate = (valor) => {
		setVariable(valor);
		setOpen(true);
		setPaso(false);
	};

	return (
		<>
			<div>
				<div className="flex m-4 justify-end items-center">
					<p className="text-blanco">Añadir productos</p>
					<button
						onClick={handleOpen}
						className="text-xl text-blue-400 border p-2 mx-3 border-blue-300 rounded-lg">
						<RiAddFill />
					</button>
				</div>
				{productos.map((costa) => (
					<div className="flex-1 rounded-lg bg-primary m-6 border">
						<div className="grid grid-cols-12 text-blanco px-1 py-4 w-full h-full">
							<div className="col-span-10">
								<dib className="flex justify-between items-center">
									<img
										src={costa.imagen}
										className="w-20 h-20 object-cover shadow-2xl rounded-full mx-2"
										alt="comida"
									/>
									<div className="grid grid-cols-12 w-full h-ful items-center justify-center">
										<p className="text-2xl p-4 col-span-4">
											{costa.nombre}
										</p>
										<p className="text-2xl p-4 col-span-2">
											{costa.category}
										</p>
										<p className="text-2xl p-4 col-span-5 truncate">
											{costa.descripcion}
										</p>
										<p className="text-2xl p-4 col-span-1">
											{costa.precio}
										</p>
									</div>
								</dib>
							</div>
							<div className="col-span-2 w-full h-full grid items-center justify-center">
								<div className="">
									<button
										onClick={() => eliminarProduct(costa)}
										className="text-sm text-red-600 border p-2 mx-3 border-red-600 rounded-lg">
										<RiDeleteBin6Line />
									</button>
									<button
										className="text-sm text-green-300 border p-2 mx-3 border-green-300 rounded-lg"
										onClick={() => funcionUpdate(costa)}>
										<AiOutlineEdit />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Box
						className="w-[90%] md:w-[60%] h-[90vh] md:h-auto overflow-auto rounded-lg"
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							bgcolor: 'transparent',
						}}>
						{paso ? (
							<NewProduct handleClose={handleClose} />
						) : (
							<UpdateProduct
								handleClose={handleClose}
								variable={variable}
							/>
						)}
					</Box>
				</Modal>
			</div>
		</>
	);
};

export default DataProductos;
