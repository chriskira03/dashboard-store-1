import React, { useState } from 'react';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';
import Order from './components/shared/Order';
import { UserProvider } from './components/hooks/UserProvider';
import Routers from './components/ruteo/Routers';

function App() {
	return (
		<>
			<UserProvider>
				{/* <PrincipalLayout>
					<Routers />
				</PrincipalLayout> */}
				<div className="bg-primary w-full min-h-screen">
					<main className="flex ">
						<div className="w-20 min-h-screen">
							<Sidebar />
						</div>
						<div className="flex-1">
							<div className="grid grid-cols-9">
								<div className="lg:col-span-7">
									<Header />
									<hr />
									<Routers />
								</div>
								<div className="lg:col-span-2 bg-tertiary">
									<Order />
								</div>
							</div>
						</div>
					</main>
				</div>
			</UserProvider>
		</>
	);
}

export default App;
