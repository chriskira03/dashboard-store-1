/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="flex flex-wrap items-center justify-evenly gap-x-4 px-4">
			<div className="lg:col-start-2 lg:col-span-11">
				<h1 className="text-blanco text-center text-2xl pt-8">
					Disfruta nuestra gran variedad de platillos
				</h1>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-10">
					<div className="grid items-center text-blanco">
						<div>
							<p className="text-3xl font-bold mb-3 relative before:block before:absolute before:-top-3 before:rounded-lg before:w-16 before:h-1 before:bg-secondary">
								¿Quieres saber quienes somos nosotros?
							</p>
							<p className="mb-5 text-textColorTwo">
								En nuestra empresa peruana, nos enorgullece
								ofrecer una carta exquisita de las comidas
								peruanas más deliciosas. Cada plato es preparado
								con los ingredientes más frescos y auténticos, y
								cocinado por expertos culinarios que han
								perfeccionado la receta de generación en
								generación.
							</p>
							<span className="font-bold py-4">
								¡Únete a nosotros para experimentar la verdadera
								delicia peruana!
							</span>
						</div>
					</div>
					<div className="col-span-2 hidden lg:block mt-12">
						<div className="h-[22rem] xl:h-[400px] max-w-[800px] relative">
							<Link
								// className="bg-secondary text-blanco p-4 rounded-xl "
								to="menu/">
								<a className="absolute left-0 top-0 w-72 xl:w-[330px] h-[220px] rounded-lg overflow-hidden group hover:z-10">
									<img
										src="https://media-cdn.tripadvisor.com/media/photo-p/0e/b1/b4/25/buen-ceviche-de-pescado.jpg"
										alt="Ciencia de los Alimentos"
										width={100}
										height={100}
										layout="responsive"
										className="rounded-lg w-72 xl:w-[330px]"
									/>
									<div className="absolute inset-0 w-full bg-secondary/60 text-xl text-center font-bold text-blanco grid place-items-center py-12 px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
										<p>Comida de la selva</p>
									</div>
								</a>
							</Link>
							<Link
								// className="bg-secondary text-blanco p-4 rounded-xl "
								to="menu/">
								<a className="absolute top-5 right-0 w-72 xl:w-[330px] h-[220px] rounded-lg overflow-hidden group hover:z-10">
									<img
										src="https://larepublica.cronosmedia.glr.pe/original/2021/01/15/6001bd19f3c540160459de93.jpg"
										alt="Farmacia y Bioquímica"
										width={100}
										height={100}
										layout="responsive"
										className="rounded-lg w-72 xl:w-[330px]"
									/>
									<div className="absolute inset-0 w-full bg-secondary/60 text-xl text-center font-bold text-blanco grid place-items-center py-12 px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
										<p>Comida de la sierra</p>
									</div>
								</a>
							</Link>
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 xl:w-[330px] h-[220px]">
								<Link
									// className="bg-secondary text-blanco p-4 rounded-xl "
									to="menu/">
									<a className="absolute rounded-lg overflow-hidden group">
										<img
											src="https://www.todoenperu.net/platos-tipicos/wp-content/uploads/2019/04/ceviche-1024x683.jpg"
											alt="Toxicología"
											width={100}
											height={100}
											layout="responsive"
											className="rounded-lg w-72 xl:w-[330px]"
										/>
										<div className="absolute inset-0 w-full bg-secondary/60 text-xl text-center font-bold text-blanco grid place-items-center py-12 px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
											<p>Comida de la costa</p>
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
