import React, { useState } from 'react';
import { useUserContext } from '../components/hooks/UserProvider';
const NewProduct = () => {
	const [previewImagen, setPreviewImagen] = useState('');

	const [productoNuevo, setProductoNuevo] = useState({
		id: '',
		imagen: '',
		nombre: '',
		descripcion: '',
		precio: '',
		category: '',
	});

	const { añadirProducto } = useUserContext();

	const { nombre, precio, imagen, descripcion, id, category } = productoNuevo;

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes enviar los datos del formulario al servidor o hacer lo que necesites
		console.log('Nombre:', nombre);
		console.log('Precio:', precio);
		console.log('Imagen:', imagen);
		console.log('Descripción:', descripcion);
		console.log('Id:', id);
		console.log('Category:', category);
		añadirProducto(productoNuevo);
	};

	const handleLimpiar = () => {
		setProductoNuevo({
			nombre: '',
			precio: '',
			imagen: '',
			descripcion: '',
			id: '',
			category: '',
		});
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
		const formData = new FormData();
		formData.append('image', archivo);
		setProductoNuevo({
			...productoNuevo,
			imagen: URL.createObjectURL(archivo),
		});
		const reader = new FileReader();
		reader.onload = () => {
			setPreviewImagen(reader.result);
			// setProductoNuevo({
			// 	...productoNuevo,
			// 	imagen: reader.result,
			// });
		};
		// reader.onload = () => {
		// 	setProductoNuevo({
		// 		...productoNuevo,
		// 		imagen: reader.result,
		// 	});
		// };
		// setProductoNuevo({
		// 	...productoNuevo,
		// 	imagen: previewImagen,
		// });
		reader.readAsDataURL(archivo);
	};

	return (
		<>
			<div className="grid grid-cols-3">
				<div className="col-span-2 px-24">
					<form onSubmit={handleSubmit}>
						<div className="m-4 flex items-center justify-between pt-4">
							<label
								htmlFor="nombre"
								className="text-lg text-blanco pr-8">
								Nombre del producto:
							</label>
							<div class="bg-tertiary rounded-lg">
								<span class="py-2 px-2 rounded-lg text-blanco">
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
									class="bg-tertiary py-2 pl-0 pr-4 rounded-lg text-blanco outline-none"
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
									class="bg-tertiary py-2 pl-0 pr-4  rounded-lg text-blanco outline-none"
								/>
							</div>
						</div>

						<div className="m-4 flex items-center justify-between pt-4">
							<label
								htmlFor="id"
								className="text-lg text-blanco pr-8">
								ID:
							</label>
							<div class="bg-tertiary rounded-lg">
								<span class="py-2 px-2 rounded-lg text-blanco">
									{/* <RiSearch2Line /> */}
								</span>
								<input
									type="text"
									id="id"
									value={id}
									onChange={(e) =>
										setProductoNuevo({
											...productoNuevo,
											id: e.target.value,
										})
									}
									placeholder="Id"
									class="bg-tertiary py-2 pl-0 pr-4 rounded-lg text-blanco outline-none"
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
				<div className="col-span-1">
					{previewImagen && (
						<>
							<label className="text-lg text-blanco pr-8">
								Imagen del Producto
							</label>
							<img
								src={previewImagen}
								alt="Vista previa de la imagen"
								width="300px"
							/>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default NewProduct;
