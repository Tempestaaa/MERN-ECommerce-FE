import { useEffect, useState } from "react";
import navLogo from "../../assets/Admin_Assets/nav-logo.svg";
import navProfile from "../../assets/Admin_Assets/nav-profile.svg";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`max-w-screen-2xl md:px-20 bg-base-100 px-4 z-[100] ${
        isSticky
          ? "bg-base-200 transition-all duration-300 ease-in-out shadow-md"
          : ""
      } fixed top-0 left-0 right-0 z-[99] flex items-center justify-between h-[68px]`}
    >
      <img src={navLogo} alt="Logo" className="w-52" />
      <img src={navProfile} alt="Profile" className="w-20" />
    </nav>
  );
};

export default Navbar;
