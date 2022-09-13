import { Link } from "react-router-dom";
import "../estilos/navbar.css";

export const Navbar = () => {
	return (
		<div>
			<div className="navbarCustom pb-2 pt-3">
				<div className="container ">
					<div className="row justify-content-center">
						<div className="col-md-6 text-center mb-2">
							<h2 className="heading-section">¿Vienes por bienes?</h2>
						</div>
					</div>
				</div>
				<div className="container-fluid px-md-5">
					<div className="row justify-content-between">
						<div className="col-md-8 order-md-last">
							<div className="row">
								<div className="col-md-6 text-center">
									<h4 className="navbar-brand" href="index.html">
										Dakota
									</h4>
								</div>
								<div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
									<form action="#" className="searchform order-lg-last">
										<div className="form-group d-flex">
											<input
												type="text"
												className="form-control pl-3"
												placeholder="Search"
											/>
											<button
												type="submit"
												placeholder=""
												className="form-control search"
											>
												<span className="fa fa-search"></span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-4 d-flex">
							<div className="social-media">
								<p className="mb-0 d-flex">
									<a
										href="#"
										className="d-flex align-items-center justify-content-center"
									>
										<span className="fa fa-facebook mx-2">
											<i className="sr-only">Facebook</i>
										</span>
									</a>
									<a
										href="#"
										className="d-flex align-items-center justify-content-center"
									>
										<span className="fa fa-twitter mx-2">
											<i className="sr-only">Twitter</i>
										</span>
									</a>
									<a
										href="#"
										className="d-flex align-items-center justify-content-center"
									>
										<span className="fa fa-instagram mx-2">
											<i className="sr-only">Instagram</i>
										</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav
				className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
				id="ftco-navbar"
			>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#ftco-nav"
						aria-controls="ftco-nav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="fa fa-bars"></span> Menu
					</button>
					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav m-auto">
							<li className="nav-item active mx-4">
								<a href="#" className="nav-link">
									Alimentos
								</a>
							</li>
							<li className="nav-item mx-4">
								<a href="#" className="nav-link">
									Enseres
								</a>
							</li>
							<li className="nav-item mx-4">
								<a href="#" className="nav-link">
									Ropa
								</a>
							</li>
							<li className="nav-item mx-4">
								<a href="#" className="nav-link">
									Electrodomesticos
								</a>
							</li>
						</ul>
					</div>
					<div>
						<Link
							className="text-white"
							style={{ "text-decoration": "none" }}
							to={`/home/`}
						>
							Ingresar
						</Link>
						{/* <Link>
							<h5 className="text-white">Ingresar</h5>
						</Link> */}
					</div>
				</div>
			</nav>
		</div>
	);
};
