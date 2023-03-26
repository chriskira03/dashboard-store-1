/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	RiHome6Line,
	RiPercentLine,
	RiPieChartLine,
	RiMailLine,
	RiLogoutCircleRLine,
} from 'react-icons/ri';

const Sidebar = (props) => {
	const {showMenu}=props;
	return (
		<div className={`bg-tertiary  flex flex-col justify-between py-6 `}>
			<div>
				<ul className="pl-4 ">
					<li className="text-2xl uppercase font-bold text-blanco text-center my-5">
						Logo
					</li>
					<li className="bg-primary p-4 rounded-tl-xl flex justify-center">
						<a
							href="#"
							className="bg-secondary text-blanco p-4 rounded-xl ">
							<RiHome6Line className="text-2xl" />
						</a>
					</li>
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiPercentLine className="text-2xl" />
						</a>
					</li>
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiPieChartLine className="text-2xl" />
						</a>
					</li>
					<li className="p-4 rounded-tl-xl flex justify-center group hover:bg-primary">
						<a
							href="#"
							className="p-4 rounded-xl text-secondary group-hover:text-blanco group-hover:bg-secondary">
							<RiMailLine className="text-2xl" />
						</a>
					</li>
				</ul>
			</div>
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
		</div>
	);
};

export default Sidebar;
