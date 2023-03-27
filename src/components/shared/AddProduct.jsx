import React from 'react';

const AddProduct = () => {
	return (
		<>
			<div className="pt-6">
				<p className="pb-4 pl-4 text-xl text-blanco"> Orders #3286</p>
				<div className="flex items-center justify-evenly gap-2 pb-4">
					<button className="bg-secondary text-blanco px-3 py-1 rounded-lg border border-complementary">
						Dine in
					</button>
					<button className="hover:bg-secondary hover:text-blanco px-3 py-1 rounded-lg border border-complementary text-secondary bg-tertiary">
						To go
					</button>
					<button className="hover:bg-secondary hover:text-blanco px-3 py-1 rounded-lg border border-complementary text-secondary bg-tertiary">
						Delivery
					</button>
				</div>
			</div>
			<hr></hr>
			<div className="py-5">
				
			</div>
			<hr></hr>
		</>
	);
};

export default AddProduct;
