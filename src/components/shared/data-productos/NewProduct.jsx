import React, { useState } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { añadirProducto } from '../../../store/slices/userReducer';
import { useDispatch } from 'react-redux';
const NewProduct = ({ handleClose }) => {
	const dispatch = useDispatch();
	const [previewImagen, setPreviewImagen] = useState('');

	const [productoNuevo, setProductoNuevo] = useState({
		nombre: '',
		descripcion: '',
		precio: '',
		category: '',
		imagen: '',
	});


	const { nombre, precio, imagen, descripcion, category, cantidad } = productoNuevo;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(añadirProducto(productoNuevo));
		handleLimpiar();
	};

	const handleLimpiar = () => {
		setProductoNuevo({
			nombre: '',
			precio: '',
			imagen: '',
			descripcion: '',
			category: '',
			cantidad:''
		});
		setPreviewImagen('');
	};

	const handleImagenChange = (e) => {
		const archivo = e.target.files[0];
		if (!archivo) {
			setProductoNuevo({
				...productoNuevo,
				imagen: '',
			});
			setPreviewImagen('');
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setProductoNuevo({
				...productoNuevo,
				imagen: reader.result,
			});
			setPreviewImagen(reader.result);
		};
		reader.readAsDataURL(archivo);
	};

	return (
		<>
			<div className="bg-primary border rounded-lg border-tertiary">
				<div className="flex justify-between items-center m-8">
					<p className="p-4 text-center text-blanco">
						Sistema para añadir productos
					</p>
					<button
						onClick={handleClose}
						className="text-sm text-blue-400 border p-2 mx-3 border-blue-300 rounded-lg">
						<AiOutlineLine />
					</button>
				</div>

				<div className="">
					<div className=" px-24">
						<form onSubmit={handleSubmit}>
							<div className="m-4 flex items-center justify-between pt-4">
								<label
									htmlFor="nombre"
									className="text-lg text-blanco pr-8">
									Nombre del producto:
								</label>
								<div className="bg-tertiary rounded-lg">
									<span className="py-2 px-2 rounded-lg text-blanco">
										{/* <RiSearch2Line /> */}
									</span>
									<input
										type="text"
										id="nombre"
										value={nombre}
										onChange={(e) =>
											setProductoNuevo({
												...productoNuevo,
												nombre: e.target.value,
											})
										}
										placeholder="Nombre Producto"
										className="bg-tertiary py-2 pl-0 pr-4 rounded-lg text-blanco outline-none"
									/>
								</div>
							</div>
							<div className="m-4  flex items-center justify-between pt-4">
								<label
									htmlFor="precio"
									className="text-lg text-blanco pr-8">
									Precio:
								</label>
								<div class=" bg-tertiary rounded-lg">
									<span class="py-2 px-2 rounded-lg text-blanco">
										{/* <RiSearch2Line /> */}
									</span>
									<input
										type="text"
										id="precio"
										value={precio}
										onChange={(e) =>
											setProductoNuevo({
												...productoNuevo,
												precio: e.target.value,
											})
										}
										placeholder="Precio"
										className="bg-tertiary py-2 pl-0 pr-4  rounded-lg text-blanco outline-none"
									/>
								</div>
							</div>
							<div className="m-4  flex items-center justify-between pt-4">
								<label
									htmlFor="category"
									className="text-lg text-blanco pr-8">
									Category:
								</label>
								<div class=" bg-tertiary rounded-lg">
									<span class="py-2 px-2 rounded-lg text-blanco">
										{/* <RiSearch2Line /> */}
									</span>
									<input
										type="text"
										id="category"
										value={category}
										onChange={(e) =>
											setProductoNuevo({
												...productoNuevo,
												category: e.target.value,
											})
										}
										placeholder="Categoria"
										class="bg-tertiary py-2 pl-0 pr-4  rounded-lg text-blanco outline-none"
									/>
								</div>
							</div>
							<div className="m-4 flex items-center justify-between pt-4">
								<label
									htmlFor="descripcion"
									className="text-lg text-blanco pr-8">
									Descripción:
								</label>
								<div class=" bg-tertiary rounded-lg">
									<span class="py-2 px-2 rounded-lg text-blanco">
										{/* <RiSearch2Line /> */}
									</span>
									<textarea
										id="descripcion"
										value={descripcion}
										onChange={(e) =>
											setProductoNuevo({
												...productoNuevo,
												descripcion: e.target.value,
											})
										}
										placeholder="Descripción"
										class="bg-tertiary py-2 pl-0 pr-4  rounded-lg text-blanco outline-none"
									/>
								</div>
							</div>
							<div className="m-4  flex items-center justify-between pt-4">
								<label
									htmlFor="cantidad"
									className="text-lg text-blanco pr-8">
									Cantidad:
								</label>
								<div class=" bg-tertiary rounded-lg">
									<span class="py-2 px-2 rounded-lg text-blanco">
										{/* <RiSearch2Line /> */}
									</span>
									<input
										type="text"
										id="cantidad"
										value={cantidad}
										onChange={(e) =>
											setProductoNuevo({
												...productoNuevo,
												cantidad: e.target.value,
											})
										}
										placeholder="Cantidad"
										className="bg-tertiary py-2 pl-0 pr-4  rounded-lg text-blanco outline-none"
									/>
								</div>
							</div>
							<div className="m-4  flex items-center justify-between pt-4">
								<label
									htmlFor="imagen"
									className="text-lg text-blanco pr-8">
									Imagen:
								</label>
								<input
									type="file"
									id="imagen"
									name="imagen"
									accept="imagen/*"
									onChange={handleImagenChange}
									className=" hidden"
								/>
								<label
									htmlFor="imagen"
									className="bg-tertiary py-2 px-4  rounded-lg text-blanco outline-none">
									Subir imagen
								</label>
							</div>
							{previewImagen && (
								<>
									<img
										src={previewImagen}
										alt="Vista previa de la imagen"
										className="w-32 h-32 object-cover shadow-2xl rounded-full mx-2"
									/>
								</>
							)}
							<div className="m-4 flex items-center justify-evenly pt-4">
								<button
									type="submit"
									className="hover:bg-secondary hover:text-blanco px-7 py-3 rounded-lg border border-complementary text-secondary bg-tertiary">
									Registrar
								</button>
								<button
									type="button"
									onClick={handleLimpiar}
									className="hover:bg-secondary hover:text-blanco px-7 py-3 rounded-lg border border-complementary text-secondary bg-tertiary">
									Limpiar
								</button>
							</div>
						</form>
					</div>
					<div className=""></div>
				</div>
			</div>
		</>
	);
};

export default NewProduct;
