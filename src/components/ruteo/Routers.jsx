import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Menu } from '../../pages/Menu';
import NewProduct from '../shared/data-productos/NewProduct';
import DataProductos from '../../pages/DataProductos';

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="menu" element={<Menu />} />
				<Route path="new" element={<NewProduct />} />
				<Route path="data-productos" element={<DataProductos />} />
			</Routes>
		</>
	);
};

export default Routers;
