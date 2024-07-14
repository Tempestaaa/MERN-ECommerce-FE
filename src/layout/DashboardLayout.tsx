import { Outlet } from "react-router-dom";
import { Blocks, CaseSensitive, Grid2X2, Plus } from "lucide-react";
import Sidebar from "../components/commons/Sidebar";
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
  {
    name: "Brand List",
    link: "brands",
    icon: CaseSensitive,
  },
  {
    name: "Category List",
    link: "categories",
    icon: Grid2X2,
  },
];

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 flex-1 container mx-auto mt-1">
      <Sidebar tabs={tabs} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
