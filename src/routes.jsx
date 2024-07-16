import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Papeis from "./pages/papeis/Papeis";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/papeis",
        element:<Papeis/>,
    }
])
