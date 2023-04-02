import React, { useState } from 'react';
import axios from 'axios';

function Prueba() {
	const [image, setImage] = useState(null);
	const [imageName, setImageName] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleImageChange = (event) => {
		setImage(event.target.files[0]);
	};

	const handleNameChange = (event) => {
		setImageName(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('image', image);

		const data = {
			nombre: 'comida',
			descripcion: 'comida',
			precio: 2,
			category: 1,
			imagen: URL.createObjectURL(image),
		};

		try {
			const response = await axios.post(
				'http://localhost:3001/platos',
				data
			);
			setImageUrl(response.data.imagen);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={imageName}
					onChange={handleNameChange}
				/>
			</div>
			<div>
				<label htmlFor="image">Imagen:</label>
				<input
					type="file"
					id="image"
					name="image"
					accept="image/*"
					onChange={handleImageChange}
				/>
			</div>
			<button type="submit">Guardar</button>
			{imageUrl && <img src={imageUrl} alt="Imagen guardada" />}
		</form>
	);
}

export default Prueba;
