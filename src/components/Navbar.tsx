import { Menu, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import useSticky from "../hooks/useSticky";
import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user.type";

const navLinks = [
  {
    name: "Shop",
    link: "/",
  },
  {
    name: "Men",
    link: "/men",
  },
  {
    name: "Women",
    link: "/women",
  },
  {
    name: "Kids",
    link: "/kids",
  },
];

const Navbar = () => {
  const isSticky = useSticky();
  const { data } = useQuery<User>({ queryKey: ["authUser"] });

  return (
    <nav
      className={`max-w-screen-2xl md:px-20  bg-base-100 px-4 z-[100] ${
        isSticky
          ? "bg-base-200 transition-all duration-300 ease-in-out shadow-md"
          : ""
      } fixed top-0 left-0 right-0 z-[99]`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((item) => (
                <li key={item.link}>
                  <NavLink to={item.link}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            SHOP
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((item) => (
              <li key={item.link}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          {data?.username ? (
            <div>
              <button className="btn btn-outline">Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline">Login</button>
            </Link>
          )}
          <Link
            to="/cart"
            className="grid place-items-center btn btn-ghost relative"
          >
            <ShoppingCart />
            <div className="absolute top-1 right-1 bg-error p-1 w-5 aspect-square rounded-full text-[10px] grid place-items-center">
              0
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
