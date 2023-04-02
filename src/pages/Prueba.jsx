import React, { useState } from 'react';
import axios from 'axios';

function Prueba() {
	const [file, setFile] = useState(null);

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		reader.onload = () => {
			setFile(reader.result);
			uploadImage(reader.result);
		};
	};

	const uploadImage = (base64EncodedImage) => {
		axios
			.post(
				'http://localhost:3001/platos',
				{ imagen: base64EncodedImage },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			{file && <img src={file} alt="uploaded" />}
		</div>
	);
}

export default Prueba;
