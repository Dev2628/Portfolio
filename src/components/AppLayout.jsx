import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};
