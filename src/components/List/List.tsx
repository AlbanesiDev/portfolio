import { IPersonalInfo } from "../../models/data.interface";
import "./List.css";

interface ListProps {
	title: string;
	items: IPersonalInfo[];
}

const List: React.FC<ListProps> = ({ title, items }) => {
	return (
		<div className="list reveal-animation">
			<h3 className="list__title">{title}</h3>
			{items.map((item) => (
				<div className="item" key={item.label}>
					<div className="item__label__container">
						<span className="item__label">{item.label}</span>
						<span className="item__sublabel">{item.sublabel}</span>
					</div>
					<span className="item__value">{item.value}</span>
				</div>
			))}
		</div>
	);
};

export { List };
