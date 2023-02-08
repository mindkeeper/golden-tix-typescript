import React from "react";

interface Item {
  link: string;
  label: string;
}

interface Props {
  items: Item[];
}

const Navigation: React.FC<Props> = ({ items }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-10 items-center">
      {items.map((item) => (
        <li className="text-base font-bold text-primay-subtitle hover:text-primary-purple duration-500 cursor-pointer">
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
