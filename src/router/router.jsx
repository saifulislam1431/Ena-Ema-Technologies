import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";

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
        }
    ]
}
])
export default router;