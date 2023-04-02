/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	RiHome6Line,
	RiPercentLine,
	RiPieChartLine,
	RiMailLine,
	RiLogoutCircleRLine,
	RiRestaurantLine
} from 'react-icons/ri';
import { GrCafeteria } from 'react-icons/gr';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Menu } from '../../pages/Menu';

const Sidebar = (props) => {
	const { showMenu } = props;
	return (
		<div className={`bg-tertiary  flex flex-col justify-between py-6 `}>
			<nav>
				<ul className="pl-4 ">
					{/* <li className="text-2xl uppercase font-bold text-blanco text-center my-5">
						<Link to="/">home</Link>
					</li> */}
					<li className="bg-primary p-4 rounded-tl-xl flex justify-center">
						<Link
							className="bg-secondary text-blanco p-4 rounded-xl "
							to="/">
							<RiHome6Line className="text-2xl" />
						</Link>
					</li>
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<Link
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary"
							to="menu/">
							<RiRestaurantLine className="text-2xl " />
						</Link>
					</li>
					{/* <li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<Link
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary"
							to="new/">
							<RiPercentLine className="text-2xl" />
						</Link>
					</li> */}
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<Link
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary"
							to="data-productos/">
							<RiPieChartLine className="text-2xl" />
						</Link>
					</li>

					{/* <li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiMailLine className="text-2xl" />
						</a>
					</li> */}
				</ul>
			</nav>
			<div>
				<ul className="pl-4">
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiLogoutCircleRLine className="text-2xl" />
						</a>
					</li>
				</ul>
			</div>
			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="menu" element={<Menu />} />
				
			</Routes> */}
		</div>
	);
};

export default Sidebar;
