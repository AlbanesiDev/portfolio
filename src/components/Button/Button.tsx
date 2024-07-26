import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={`button ${props.className || ""}`}>
			{children}
		</button>
	);
};

export { Button };
