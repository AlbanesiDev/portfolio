import { Link } from "react-router-dom";
import { SECTIONS } from "../../utils/sections";
import "./Navbar.css";

const Navbar: React.FC = () => {
	const navigate = (section: string) => {
		switch (section) {
			case SECTIONS.ABOUT:
				//  aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
				break;
			case SECTIONS.SKILLS:
				//  skillsRef.current?.scrollIntoView({ behavior: "smooth" });
				break;
			case SECTIONS.PROJECTS:
				// projectsRef.current?.scrollIntoView({ behavior: "smooth" });
				break;
			case SECTIONS.CONTACT:
				// contactRef.current?.scrollIntoView({ behavior: "smooth" });
				break;
			default:
				break;
		}
	};

	return (
		<>
			<nav className="navbar scale__cursor">
				<Link to="/">
					<div className="navbar__logo">
						<img src="/src/assets/icons/star.svg" alt="" />
					</div>
				</Link>
				<button className="navbar__btn nav__cursor" onClick={() => navigate(SECTIONS.ABOUT)}>
					sobre mí
				</button>
				<button className="navbar__btn nav__cursor" onClick={() => navigate(SECTIONS.SKILLS)}>
					habilidades
				</button>
				<button className="navbar__btn nav__cursor" onClick={() => navigate(SECTIONS.PROJECTS)}>
					proyectos
				</button>
				<button className="navbar__btn nav__cursor" onClick={() => navigate(SECTIONS.CONTACT)}>
					contacto
				</button>
			</nav>
		</>
	);
};

export { Navbar };
