import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../Pages/Contact Us/ContactUs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/ContactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
export default router;
