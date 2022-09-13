import React from "react";
import { ImagenesGalery } from "../components/ImagenesGalery";
import { Navbar } from "../components/Navbar";

export const PrincipalPage = () => {
	return (
		<div>
			<Navbar />
			<ImagenesGalery />
		</div>
	);
};
