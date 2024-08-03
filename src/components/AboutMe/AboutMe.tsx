import { IAboutMe } from "../../models/data.interface";
import { navigateTo } from "../../utils/navigateTo";
import { Button, List } from "..";
import "./AboutMe.css";

interface AboutProps {
	data: IAboutMe;
}

const AboutMe: React.FC<AboutProps> = ({ data }) => {
	const handleDownload = () => {
		navigateTo(data.pdf_url);
	};

	return (
		<div className="container">
			<div className="about__container">
				<div className="about__card">
					<div className="card__img__container">
						<img className="card__img" src={data.img} alt={data.name} />
						<img className="card__icon" src={data.icon} alt="icon" />
					</div>
					<div className="card__content">
						<h3 className="card__title">{data.title}</h3>
						<h2 className="card__name">{data.name}</h2>
					</div>
				</div>
				<div className="about__description__container">
					<p className="about__description">
						{data.description[0]}
						<br />
						<br />
						{data.description[1]}
					</p>
					<Button className="button__cv link__cursor" onClick={handleDownload}>
						Descargar CV
					</Button>
				</div>
			</div>
			{data.list.map((item) => (
				<List key={item.title} title={item.title} items={item.item} />
			))}
		</div>
	);
};

export { AboutMe };
