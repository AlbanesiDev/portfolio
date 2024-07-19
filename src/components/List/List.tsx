import { Item } from "../../models";
import "./List.css";

interface ListProps {
  title: string;
  items: Item[];
}

const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <div className="list">
      <h3 className="list_title">{title}</h3>
      {items.map((item) => (
        <div className="item" key={item.label}>
          <div className="item_label_container">
            <span className="item_label">{item.label}</span>
            <span className="item_sublabel">{item.sublabel}</span>
          </div>
          <span className="item_value">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export { List };
