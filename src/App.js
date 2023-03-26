import React, { useState } from 'react';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';
import {
	RiMenu3Fill,
	RiUser3Line,
	RiAddLine,
	RiPieChartLine,
	RiCloseLine,
	RiSearch2Line,
	RiArrowDownSLine,
} from 'react-icons/ri';
import Cards from './components/shared/Cards';
import Order from './components/shared/Order';
import { useCounter } from './components/hooks/useCounter';

function App() {
	const [showMenu, setShowMenu] = useState(true);
	const [showOrder, setShowOrder] = useState();

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};
	const [pedido, setPedido] = useState({
		pedir: 0,
		id: 0,
	});
	const { pedir, id } = pedido;

	const { counter, incremento, decrement, reset, identificar} = useCounter();

	return (
		<div className="bg-primary w-full min-h-screen">
			<main className="flex ">
				<div className="w-20 min-h-screen">
					<Sidebar showMenu={showMenu} />
				</div>
				<div className="grid grid-cols-9">
					<div className="lg:col-span-7">
						<Header />
						<hr />
						<Cards />
					</div>
					<div className="lg:col-span-2 bg-tertiary">
						<Order />
					</div>
				</div>
			</main>

			
			{/* Menu movil */}
			{/* <nav className="bg-tertiary text-blanco lg:hidden fixed w-full bottom-0 left-0 text-2xl py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
				<button className="p-2">
					<RiUser3Line />
				</button>
				<button className="p-2">
					<RiAddLine />
				</button>
				<button onClick={toggleOrders} className="p-2">
					<RiPieChartLine />
				</button>
				<button onClick={toggleMenu} className="text-white p-2">
					{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
				</button>
			</nav> */}
		</div>
	);
}

export default App;
