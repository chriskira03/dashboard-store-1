import './styles/global.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/ruteo/Sidebar';
import Header from './components/ruteo/Header';
import Order from './components/shared/order/Order';
import Routers from './components/ruteo/Routers';
import { useDispatch } from 'react-redux';
import { listarProductos } from './store/slices/userReducer';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listarProductos());
	}, [dispatch]);
	const [sidebar, setSidebar] = useState(false);
	return (
		<>
			<div className="bg-primary w-full min-h-screen">
				<div>
					<div className="w-full bg-tertiary h-2"></div>
					<header className="flex flex-col items-center justify-between py-4 px-8 bg-primary space-y-4">
						<Header setSidebar={setSidebar} sidebar={sidebar} />
						<Sidebar />
					</header>
				</div>
				<hr />
				<main className="flex ">
					<div className="">
						<Routers />
					</div>
					<Order setSidebar={setSidebar} sidebar={sidebar} />
				</main>
				<footer></footer>
			</div>
		</>
	);
}

export default App;
