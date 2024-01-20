import { useState } from "react";
import { NavLink } from "./NavLink";
import { BsXLg, BsList } from "react-icons/bs";

export const MenuMobile = () => {
  const [isMobileActive, setMobileActive] = useState(false);
  const [isFirstItemClicked, setFirstItemClicked] = useState(false);

  const toggleMobileActive = () => {
    setMobileActive(!isMobileActive);
  };

  const handleItemClick = (index) => {
    setFirstItemClicked(index === 0);
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setMobileActive(false);
    setFirstItemClicked(false);
  };

  return (
    <>
      {isMobileActive ? (
        <BsXLg
          className={`menu ${isFirstItemClicked ? "first-item-clicked" : ""}`}
          onClick={toggleMobileActive}
          style={{ color: isFirstItemClicked ? "#1A1A1A" : "#FFFFFF" }}
        />
      ) : (
        <BsList
          className={`menu ${isFirstItemClicked ? "first-item-clicked" : ""}`}
          onClick={toggleMobileActive}
          style={{ color: isFirstItemClicked ? "#1A1A1A" : "#FFFFFF" }}
        />
      )}
      <ul
        className={`active ${isMobileActive ? "listMobile" : ""}`}
        onMouseLeave={handleMenuClose}
      >
        <li
          className={`listMobile__item ${
            isFirstItemClicked ? "first-item-clicked" : ""
          }`}
          onClick={() => handleItemClick(0)}
          style={{ color: isFirstItemClicked ? "#1A1A1A" : "#FFFFFF" }}
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className={`listMobile__item ${
            isFirstItemClicked ? "first-item-clicked" : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          <NavLink to="/about">About</NavLink>
        </li>
        <li
          className={`listMobile__item ${
            isFirstItemClicked ? "first-item-clicked" : ""
          }`}
          onClick={() => handleItemClick(2)}
        >
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li
          className={`listMobile__item ${
            isFirstItemClicked ? "first-item-clicked" : ""
          }`}
          onClick={() => handleItemClick(3)}
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
};
