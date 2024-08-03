import { useEffect, useRef } from "react";
import { Title, AboutMe, Skills, Projects, Contact } from "../components";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { SECTIONS } from "../utils/sections";
import { useLocation } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
	const data = PORTFOLIO_DATA;
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.section) {
			const section = location.state.section;
			switch (section) {
				case SECTIONS.ABOUT:
					aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
					break;
				case SECTIONS.SKILLS:
					skillsRef.current?.scrollIntoView({ behavior: "smooth" });
					break;
				case SECTIONS.PROJECTS:
					projectsRef.current?.scrollIntoView({ behavior: "smooth" });
					break;
				case SECTIONS.CONTACT:
					contactRef.current?.scrollIntoView({ behavior: "smooth" });
					break;
				default:
					break;
			}
		}
	}, [location.state]);

	return (
		<div className="home">
			<div className="section__container" ref={aboutMeRef}>
				<Title title="Sobre mí" />
				<AboutMe data={data.about_me} />
			</div>
			<div className="section__container" ref={skillsRef}>
				<Title title="Habilidades" />
				<Skills data={data.skills} />
			</div>
			<div className="section__container" ref={projectsRef}>
				<Title className="reveal-animation" title="Proyectos" />
				<Projects data={data.projects} />
			</div>
			<div className="section__container" ref={contactRef}>
				<Title className="reveal-animation" title="Contacto" />
				<Contact data={data.contact} />
			</div>
		</div>
	);
};

export default HomePage;
