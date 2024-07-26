import { useEffect, useRef } from "react";
import "./Title.css";

interface TitleProps {
	title: string;
	className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
	const titleRef = useRef<HTMLHeadingElement>(null);

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX } = event;
		const windowWidth = window.innerWidth;

		const weight = Math.min(600, Math.max(50, (clientX / windowWidth) * 650));

		if (titleRef.current) {
			titleRef.current.style.fontWeight = `${weight}`;
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className={`title__container ${className}`}>
			<h2 className="title" ref={titleRef}>
				{title}
			</h2>
		</div>
	);
};

export { Title };
