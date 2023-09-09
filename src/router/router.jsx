import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import ServicesDetails from "../components/ServicesDetails";
import FullStack from "../Pages/FullStack/FullStack";
import Editing from "../Pages/Editing/Editing";
import SEODetails from "../Pages/SEODetails/SEODetails";
import DesignDetail from "../Pages/DesignDetail/DesignDetail";
import WebPresence from "../Pages/WebPresence/WebPresence";
import Ecommerce from "../Pages/Ecommerce/Ecommerce";
import AdvanceWeb from "../Pages/AdvanceWeb/AdvanceWeb";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ManageClients from "../Pages/Admin/ManageClients";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";

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
        },
        {
            path: "/seo",
            element:<SEODetails />
        },
        {
            path:"/design",
            element:<DesignDetail />
        },
        {
            path:"/presence",
            element:<WebPresence />
        },
        {
            path:"/commerce",
            element:<Ecommerce />
        },
        {
            path:"/advanced",
            element:<AdvanceWeb />
        },
        {
            path: "/signIn-koren",
            element:<SignIn />
        },
        {
            path:"/dashboard",
            element:<PrivateRouter><AdminRouter><Dashboard /></AdminRouter></PrivateRouter>,
            children:[
                {
                    path:"manageUsers",
                    element:<PrivateRouter><AdminRouter><ManageUsers/></AdminRouter></PrivateRouter>
                },
                {
                    path:"manageClients",
                    element:<PrivateRouter><AdminRouter><ManageClients/></AdminRouter></PrivateRouter>
                }
            ]
        }
    ]
}
])
export default router;