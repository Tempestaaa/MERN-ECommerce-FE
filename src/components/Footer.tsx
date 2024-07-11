import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Products</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Twitter />
          </a>
          <a>
            <Instagram />
          </a>
          <a>
            <Facebook />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
