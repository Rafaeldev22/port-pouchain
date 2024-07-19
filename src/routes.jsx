
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Papeis from "./pages/papeis/Papeis";
import Alcas from "./pages/alcas/Alcas";
import Acabamento from "./pages/acabamento/Acabamento";
import Pagina from "./pages/testeModal/Pagina";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/papeis",
    element: <Papeis />,
  },
  {
    path: "/alcas",
    element: <Alcas />,
  },
  {
    path: "/acabamento",
    element: <Acabamento />,
  },
  {
    path: "/modal",
    element: <Pagina />,
  },
]);
