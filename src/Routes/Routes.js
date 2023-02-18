import Apply from "../Pages/Apply/Apply";
import About from "../Pages/Home/About/About";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/apply",
            element: <PrivateRoutes><Apply></Apply></PrivateRoutes>
        },
    ]
  },
]);

export default router;
