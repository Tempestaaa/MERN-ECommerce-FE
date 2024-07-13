import { Outlet } from "react-router-dom";
import Footer from "../components/commons/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/commons/Navbar";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/commons/Loading";

const Layout = () => {
  const { isLoading } = useQuery({ queryKey: ["authUser"] });

  return (
    <div className="flex flex-col min-h-svh font-default">
      <Navbar />
      <div className="flex flex-1 pt-[68px]">
        {isLoading ? (
          <div className="w-full grid place-items-center">
            <Loading />
          </div>
        ) : (
          <Outlet />
        )}
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
