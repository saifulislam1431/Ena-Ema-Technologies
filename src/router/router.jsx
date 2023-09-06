import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import ServicesDetails from "../components/ServicesDetails";
import FullStack from "../Pages/FullStack/FullStack";
import Editing from "../Pages/Editing/Editing";

const router = createBrowserRouter([
{
    path:"/",
    errorElement:<ErrorPage />,
    element:<Main />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/development",
            element:<FullStack />
        },
        {
            path: "/editing",
            element:<Editing />
        }
    ]
}
])
export default router;