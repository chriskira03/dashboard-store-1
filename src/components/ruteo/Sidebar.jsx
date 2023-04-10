/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	RiLeafLine,
	RiRestaurant2Line,
	RiRestaurantLine,
	RiSunFoggyLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className={`bg-tertiary  w-full `}>
			<nav>
				<ul className="flex items-center justify-center space-x-16 border rounded-2xl mx-40 py-4">
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							to="menu/">
							<RiRestaurantLine className="text-3xl " />
							<p>MENÚ</p>
						</Link>
					</li>
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							to="costa/">
							<RiRestaurant2Line className="text-3xl " />
							<p>COSTA</p>
						</Link>
					</li>
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							to="sierra/">
							<RiSunFoggyLine className="text-3xl" />
							<p>SIERRA</p>
						</Link>
					</li>
					<li className="">
						<Link
							className="flex flex-col items-center space-y-1 hover:text-secondary text-blanco "
							to="selva/">
							<RiLeafLine className="text-3xl " />
							<p>SELVA</p>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
