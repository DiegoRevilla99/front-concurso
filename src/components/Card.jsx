import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../estilos/card.css";

export const Card = ({ id, nombre, url, description, donador }) => {
	return (
		<div className="col">
			<div className="card cardCustom" style={{ width: 20 + "rem" }}>
				<img src={url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<p>
						{" "}
						<strong>Donador: </strong> {donador}{" "}
					</p>
					<p className="card-text">{description}</p>
					<Link to={`/home/detalle/${id}`}>Ver mas...</Link>
				</div>
			</div>
		</div>
	);
};
