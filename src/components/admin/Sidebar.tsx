import { Link } from "react-router-dom";
import { SidebarType } from "../../types/sidebar.type";

type Props = {
  tabs: SidebarType[];
};

const Sidebar = ({ tabs }: Props) => {
  return (
    <div className="w-full md:w-1/4 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto">
      {tabs.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.link}
            to={item.link}
            className="flex items-center justify-center gap-2 btn"
          >
            <Icon />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
