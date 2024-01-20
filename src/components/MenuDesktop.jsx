import { NavLink } from "./NavLink";
export const MenuDesktop = () => {
  return (
    <>
      <ul className="header__nav--list listDesktop">
        <li className="listDesktop__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="listDesktop__item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="listDesktop__item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="listDesktop__item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
};
