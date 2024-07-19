import DynamicIcon from "../DynamicIcon/DynamicIcon";
import { ISkill } from "../../models";
import "./Skills.css";

interface SkillProps {
  data: ISkill[];
}

const Skills: React.FC<SkillProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="container">
      <h3 className="skill_title">habilidades</h3>
      <div className="skill_container">
        {data.map((item) => (
          <DynamicIcon key={item.label} iconName={item.icon} />
        ))}
      </div>
    </div>
  );
};

export { Skills };
