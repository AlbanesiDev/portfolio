import { useNavigate } from "react-router-dom";
import { SECTIONS } from "../../utils/sections";
import "./Navbar.css";

const Navbar: React.FC = () => {
	const iconsFolder = import.meta.env.VITE_ICONS_FOLDER;
	const navigate = useNavigate();

	const handleNavigation = (section?: string) => {
		section ? navigate("/", { state: { section } }) : navigate("/");
	};

	return (
		<>
			<nav className="navbar scale__cursor">
				<div className="navbar__logo" onClick={() => handleNavigation()}>
					<img src={`${iconsFolder}/star.svg`} alt="" />
				</div>
				<button
					className="navbar__btn nav__cursor"
					onClick={() => handleNavigation(SECTIONS.ABOUT)}
				>
					sobre mí
				</button>
				<button
					className="navbar__btn nav__cursor"
					onClick={() => handleNavigation(SECTIONS.SKILLS)}
				>
					habilidades
				</button>
				<button
					className="navbar__btn nav__cursor"
					onClick={() => handleNavigation(SECTIONS.PROJECTS)}
				>
					proyectos
				</button>
				<button
					className="navbar__btn nav__cursor"
					onClick={() => handleNavigation(SECTIONS.CONTACT)}
				>
					contacto
				</button>
			</nav>
		</>
	);
};

export { Navbar };
