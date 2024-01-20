import { BrowserRouter } from "react-router-dom";
import { Route } from "./components/Route";

export const App = () => {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
};
