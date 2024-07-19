import "./Button.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};

export { Button };
