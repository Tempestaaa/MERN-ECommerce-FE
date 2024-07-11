import { Outlet } from "react-router-dom";
import { Blocks, Plus } from "lucide-react";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
import { SidebarType } from "../types/sidebar.type";

const tabs: SidebarType[] = [
  {
    name: "Add Product",
    link: "add-product",
    icon: Plus,
  },
  {
    name: "Product List",
    link: "products",
    icon: Blocks,
  },
];

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-svh font-default">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 flex-1 py-[68px] container mx-auto mt-1">
        <Sidebar tabs={tabs} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
