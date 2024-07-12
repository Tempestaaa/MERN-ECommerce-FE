import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-svh font-default">
      <Navbar />
      <div className="flex flex-1 py-[68px]">
        <Outlet />
      </div>
      <Footer />

      {/* Toast */}
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Layout;
