import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type props = {
	children: React.ReactNode;
};

const Layout = ({ children }: props) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
