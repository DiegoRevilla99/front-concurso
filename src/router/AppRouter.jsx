import { Route, Routes } from "react-router-dom";
import { DetallesPagina } from "../pages/DetallesPagina";
import { PrincipalPage } from "../pages/PrincipalPage";
import { Usuarios } from "../pages/Usuarios";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="home" element={<PrincipalPage />} />

			<Route path="home/detalle/:id" element={<DetallesPagina />} />
			<Route path="home/usuario" element={<Usuarios />} />
		</Routes>
	);
};
