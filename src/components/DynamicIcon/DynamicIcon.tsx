interface DynamicIconProps {
	iconName: string;
	className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, className }) => {
	const iconFolder = "/src/assets/icons/";

	return <img className={className} src={`${iconFolder}${iconName}.svg`} alt={iconName} />;
};

export { DynamicIcon };
