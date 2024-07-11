import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-svh font-default">
      <Navbar />
      <div className="flex flex-1 py-[68px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
