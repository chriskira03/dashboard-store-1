import React, { useState } from 'react';
const NewProduct = () => {
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState('');
	const [imagen, setImagen] = useState('');
	const [previewImagen, setPreviewImagen] = useState('');
	const [descripcion, setDescripcion] = useState('');

	const [productoNuevo, setProductoNuevo] = useState({
		nombre:'',
		precio:'',
		imagen:'',
		descripcion:'',
		id:'', 
		category:''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes enviar los datos del formulario al servidor o hacer lo que necesites
		console.log('Nombre:', nombre);
		console.log('Precio:', precio);
		console.log('Imagen:', imagen);
		console.log('Descripción:', descripcion);
		// Luego puedes limpiar el formulario
		setNombre('');
		setPrecio('');
		setImagen('');
		setPreviewImagen('');
		setDescripcion('');
	};

	const handleLimpiar = () => {
		setNombre('');
		setPrecio('');
		setImagen('');
		setPreviewImagen('');
		setDescripcion('');
	};

	const handleImagenChange = (e) => {
		const archivo = e.target.files[0];
		if (!archivo) {
			setImagen('');
			setPreviewImagen('');
			return;
		}
		setImagen(archivo);
		const reader = new FileReader();
		reader.onload = () => {
			setPreviewImagen(reader.result);
		};
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
									onChange={(e) => setNombre(e.target.value)}
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
									onChange={(e) => setPrecio(e.target.value)}
									placeholder="Precio"
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
										setDescripcion(e.target.value)
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
								onChange={handleImagenChange}
								className=" hidden"
							/>
							<label
								htmlFor="imagen"
								className="bg-tertiary py-2 px-4  rounded-lg text-blanco outline-none">
								Subir imagen
							</label>
							{/* {previewImagen && (
								<img
									src={previewImagen}
									alt="Vista previa de la imagen"
									width="200"
								/>
							)} */}
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
