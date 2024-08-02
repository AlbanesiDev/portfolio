import { Outlet, useLocation } from "react-router-dom";
import { Cursor, Footer, Navbar } from "../components";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect } from "react";

const Layout: React.FC = () => {
	const isMobile = useIsMobile();
	const location = useLocation();

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [location.pathname]);

	return (
		<>
			{!isMobile && <Cursor />}
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
