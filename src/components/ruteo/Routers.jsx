import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Menu } from '../../pages/Menu';
import NewProduct from '../../pages/NewProduct';
import AddProduct from '../shared/AddProduct';
import Prueba from '../../pages/Prueba';


const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="menu" element={<Menu />} />
				<Route path="new" element={<Prueba />} />
				<Route path="new" element={<AddProduct />} />
			</Routes>
		</>
	);
};

export default Routers;
