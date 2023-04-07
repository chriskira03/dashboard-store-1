import './styles/global.css';
import React, { useState } from 'react';
import Sidebar from './components/ruteo/Sidebar';
import Header from './components/ruteo/Header';
import Order from './components/shared/order/Order';
import { UserProvider } from './components/hooks/UserProvider';
import Routers from './components/ruteo/Routers';

function App() {
	const [sidebar, setSidebar] = useState(false);

	return (
		<>
			<UserProvider>
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
			</UserProvider>
		</>
	);
}

export default App;
