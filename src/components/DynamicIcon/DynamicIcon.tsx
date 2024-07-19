import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";
import "./DynamicIcon.css";

interface DynamicIconProps {
  iconName: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
  const [Icon, setIcon] = useState<IconType | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const icons = await import("react-icons/si");
        const ImportedIcon = icons[iconName as keyof typeof icons];
        setIcon(() => ImportedIcon as IconType);
      } catch (error) {
        console.error(`Error importing icon: ${iconName}`, error);
      }
    };

    loadIcon();
  }, [iconName]);

  return Icon ? <Icon className="icon" /> : null;
};

export default DynamicIcon;
