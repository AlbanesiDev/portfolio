import { useLocation, useNavigate } from "react-router-dom";
import { IProject } from "../models/data.interface";

import "./DetailsPage.css";
import { useEffect } from "react";

const DetailsPage: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const project = location.state as IProject;

	useEffect(() => {
		if (!project) {
			navigate("/");
		}
	}, [project, navigate]);

	if (!project) {
		return null;
	}

	return (
		<>
			<section id="gallery">
				<div className="pin-wrap-sticky">
					<div className="pin-wrap">
						<div className="">
							<h1>{project.title}</h1>
						</div>
						{project.img.map((item, index) => (
							<img key={index} className="pin-image" src={item.src} alt={item.alt} />
						))}
						<div className="c"></div>
						<div className="c"></div>
						<div className="c"></div>
					</div>
				</div>
			</section>

			<section>
				<img src="../shared/pexels-photo-4791474.jpeg" alt="" />
				<h2 className="credit">
					Created by
					<a href="https://twitter.com/bramus" target="_top" rel="noreferrer noopener">
						Bramus
					</a>
					<a href="https://codepen.io/cameronknight/pen/qBNvrRQ" target="_top">
						the original by Cameron Knight
					</a>
					.
				</h2>
				<section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
					<div>
						<h1>
							<span>Horizontal</span> <span>scroll</span> <span>section</span>
						</h1>
						<p>With CSS view-timeline</p>
					</div>
				</section>
			</section>
		</>
	);
};

export default DetailsPage;
