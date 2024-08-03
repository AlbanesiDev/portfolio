import { DynamicIcon } from "..";
import { ISkill } from "../../models/data.interface";
import "./Skills.css";

interface SkillProps {
	data: ISkill[];
}

const Skills: React.FC<SkillProps> = ({ data }) => {
	return (
		<div className="container reveal-animation">
			<div className="skill__container">
				{data.map((item) => (
					<div className="skill__item scale__cursor" key={item.label}>
						<DynamicIcon className="skill__icon" iconName={item.icon} />
						<span className="skill__label">{item.label}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export { Skills };
