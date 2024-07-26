import { Outlet, ScrollRestoration } from "react-router-dom";
import { Cursor, Footer, Navbar } from "../components";
import { useIsMobile } from "../hooks";

const Layout: React.FC = () => {
	const isMobile = useIsMobile();

	return (
		<>
			<ScrollRestoration />
			{!isMobile && <Cursor />}
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
