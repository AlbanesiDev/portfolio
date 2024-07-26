import { useRef } from "react";
import { Title, AboutMe, Skills, Projects, Contact } from "../components";
import { PORTFOLIO_DATA } from "../data/portfolio";

const HomePage: React.FC = () => {
	const data = PORTFOLIO_DATA;
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div ref={aboutMeRef}>
				<Title title="Sobre mí" />
				<AboutMe data={data.about_me} />
			</div>
			<div ref={skillsRef}>
				<Skills data={data.skills} />
			</div>
			<div ref={projectsRef}>
				<Title className="reveal-animation" title="Proyectos" />
				<Projects data={data.projects} />
			</div>
			<div ref={contactRef}>
				<Title className="reveal-animation" title="Contacto" />
				<Contact data={data.contact} />
			</div>
		</>
	);
};

export default HomePage;
