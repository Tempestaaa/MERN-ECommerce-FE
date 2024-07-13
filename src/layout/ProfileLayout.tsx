import { Outlet } from "react-router-dom";
import Sidebar from "../components/commons/Sidebar";
import { SidebarType } from "../types/sidebar.type";
import { Key, User } from "lucide-react";

const tabs: SidebarType[] = [
  {
    name: "Profile",
    link: "/profile",
    icon: User,
  },
  {
    name: "Change password",
    link: "change-password",
    icon: Key,
  },
];

const ProfileLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 flex-1 container mx-auto">
      <Sidebar tabs={tabs} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
