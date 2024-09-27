import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import navbarRoutes from "../config/NavbarRoutes";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentLink = navbarRoutes.find(link => link.href === location.pathname);
    if (currentLink) {
      setActiveLink(currentLink.name);
    }
  }, [location.pathname]);

  const renderNavLinks = () => (
    <div className="flex justify-center gap-[2rem] xl:gap-[8rem]">
      {navbarRoutes.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setActiveLink(link.name)}
          className={`text-base ${activeLink === link.name ? "underline" : ""}`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );

  return (
    <div>
      {renderNavLinks()}
    </div>
  );
};

export default Navbar;
