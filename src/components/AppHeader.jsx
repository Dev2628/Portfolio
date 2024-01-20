import { NavLink } from "./NavLink";
import logo from "../assets/images/logo.webp";
import { MenuMobile } from "./MenuMobile";
import { MenuDesktop } from "./MenuDesktop";
export const AppHeader = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav--image">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <MenuDesktop />
        <MenuMobile />
      </nav>
    </header>
  );
};
