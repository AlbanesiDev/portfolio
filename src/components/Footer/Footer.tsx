import "./Footer.css";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<p>
				© Copyright 2024 |{" "}
				<a className="link__cursor" target="_blank" href="https://github.com/AlbanesiDev">
					AlbanesiDev
				</a>
			</p>
		</footer>
	);
};

export { Footer };
