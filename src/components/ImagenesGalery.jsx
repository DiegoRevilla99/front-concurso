import React from "react";
import { Card } from "./Card";

export const ImagenesGalery = () => {
	return (
		<div className="container">
			<div className="mt-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-2">
				{/* {periodos.map((periodo, i) => {
							// console.log(periodo);
							if (periodo.loading == false) {
								return (
									<PeriodoListItem
										key={
											periodo.nombre + periodo.fechaInicio + periodo.fechaFin
										}
										periodo={periodo.nombre}
										index={i}
										carpeta={carpeta}
									/>
								);
							}
                 */}
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
