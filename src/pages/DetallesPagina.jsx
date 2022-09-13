import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../estilos/detalle.css";
const ngrok = "https://f7bf-187-141-99-82.ngrok.io";
export const DetallesPagina = () => {
	const { id } = useParams();
	const [data, setData] = useState({});

	useEffect(() => {
		fetch(`https://f7bf-187-141-99-82.ngrok.io/api/products/${id}?populate=*`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.data);
				setData(data.data);
			});
	}, []);

	return (
		<div className="container container-md">
			<p className="av-badge-true" id="availability">
				Disponible!
			</p>
			<div className="row gx-4 gx-lg-5 align-items-center">
				<div className="col-md-6">
					<img
						className="card-img-top mb-5 mb-md-0"
						src={ngrok + data?.attributes?.picture?.data?.attributes?.url}
						alt="..."
					/>
				</div>
				<div className="col-md-6">
					<div className="small mb-1" id="category">
						{data?.attributes?.category}
					</div>
					<h1 className="display-5 fw-bolder" id="itemName">
						{data?.attributes?.name}
					</h1>
					<p className="lead mt-5" id="itemDescription">
						{data?.attributes?.description}
					</p>
					{!!data?.attributes?.expirationDate && (
						<div className="mb-3">
							<span className="" id="expireDate">
								Fecha de expiración (?)
							</span>
						</div>
					)}

					<div className="card-text" id="qualityStatus">
						{data?.attributes?.status === "Nuevo" ? (
							<span className="text-card-success">Nuevo</span>
						) : (
							<span className="text-card-secondary">Usado</span>
						)}
						{/* <span className="text-card-success">Nuevo</span> (o puede ser)&nbsp;
						<span className="text-card-secondary">Usado</span> */}
					</div>
					<button className="btn btn-outline-dark mt-3" type="button">
						Solicitar
					</button>
				</div>
			</div>
		</div>
	);
};
