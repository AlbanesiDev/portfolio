interface DynamicIconProps {
	iconName: string;
	className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, className }) => {
	const iconFolder = import.meta.env.VITE_ICONS_FOLDER;

	return <img className={className} src={`${iconFolder}${iconName}.svg`} alt={iconName} />;
};

export { DynamicIcon };
