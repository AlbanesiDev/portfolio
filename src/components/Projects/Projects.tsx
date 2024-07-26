import { useNavigate } from "react-router-dom";
import { Button, VideoPreview, DynamicIcon } from "..";
import { IProject } from "../../models/data.interface";
import { navigateTo } from "../../utils/navigateTo";
import "./Projects.css";

interface ProjectsProps {
	data: IProject[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
	const navigate = useNavigate();

	const handleNavigateToUrl = (url: string) => {
		navigateTo(url);
	};

	const handleNavigateRoute = (url: string, data: IProject) => {
		const urlFormatted = url.replace(" ", "-").toLowerCase();
		const route = `/caso-de-estudio/${urlFormatted}`;
		navigate(route, { state: data });
	};

	return (
		<div className="container__wide projects__container ">
			{data.map((project) => (
				<div className="project reveal-animation" key={project.title}>
					<div className="project__content">
						<div className="project__title__container">
							<h3 className="project__subtitle">{project.subtitle}</h3>
							<h2 className="project__title">{project.title}</h2>
						</div>
						<p className="project__description">{project.description}</p>
						<div className="project__stack">
							{project.stack.map((item, index) => (
								<div className="project__stack__item" key={index}>
									<DynamicIcon className="project__stack__icon " iconName={item.icon} />
									<p className="project__stack__label">{item.label}</p>
								</div>
							))}
						</div>
						<div className="project__buttons">
							<Button className="link__cursor" onClick={() => handleNavigateToUrl(project.url_app)}>
								<DynamicIcon className="button__icon" iconName="web"></DynamicIcon>
								Ver Sitio Web
							</Button>
							<Button
								className="link__cursor"
								onClick={() => handleNavigateToUrl(project.url_github)}
							>
								<DynamicIcon className="button__icon" iconName="github"></DynamicIcon>
								Código en GitHub
							</Button>
						</div>
					</div>

					<div className="preview gallery__cursor">
						<div className="preview__content">
							<h3 className="project__subtitle">{project.subtitle}</h3>
							<h2 className="project__title">{project.title}</h2>
						</div>
						<div onClick={() => handleNavigateRoute(project.title, project)}>
							<VideoPreview data={project.video_preview} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export { Projects };
