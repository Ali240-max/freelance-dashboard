import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as CiIcons from "react-icons/ci";
import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";
import { NavLink } from "react-router-dom";

const allIcons = {
  ...MdIcons,
  ...IoIcons,
  ...GrIcons,
  ...FaIcons,
  ...Fa6Icons,
  ...CiIcons,
  ...FiIcons,
  ...LuIcons,
};

function SidebarItem({ children, iconName, to, setCollapse }) {
  const IconComponent = allIcons[iconName];

  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found.`);
    return null;
  }
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive, isPending }) =>
        `flex gap-8 items-center cursor-pointer transition-all duration-300 rounded-lg p-2 px-4 w-60 ${
          isPending
            ? "hover:bg-gray-100"
            : isActive
            ? "bg-gray-100"
            : "hover:bg-gray-100"
        }`
      }
    >
      <IconComponent size={35} />
      <h2 className="text-xl transition-all duration-300">{children}</h2>
    </NavLink>
  );
}

export default SidebarItem;
