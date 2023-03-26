import React, { useState } from 'react';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';

import Cards from './components/shared/Cards';
import Order from './components/shared/Order';
import { UserProvider } from './components/hooks/UserProvider';

function App() {
	return (
		<>
			<UserProvider>
				<div className="bg-primary w-full min-h-screen">
					<main className="flex ">
						<div className="w-20 min-h-screen">
							<Sidebar />
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
				</div>
			</UserProvider>
		</>
	);
}

export default App;
