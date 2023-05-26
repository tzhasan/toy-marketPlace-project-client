import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../src/Layouts/HomeLayout";
import HomePage from "../src/Pages/HomePage/HomePage";
import AllToys from "../src/Pages/AllToys/AllToys";
import MyToys from "../src/Pages/MyToys/MyToys";
import AddAToy from "../src/Pages/AddAToy";
import Blogs from "../src/Pages/Blogs";
import LoginPage from "../src/Pages/LoginPage";
import RegisterPage from "../src/Pages/RegisterPage";
import EditToys from "../src/Pages/MyToys/EditToys";
import PrivetRoutes from "./PrivetRoutes";
import Error404Page from "../src/Pages/Error404Page";
import ViewDetails from "../src/SharedComponent/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404Page></Error404Page>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "mytoys",
        element: (
          <PrivetRoutes>
            <MyToys />
          </PrivetRoutes>
        ),
      },
      {
        path: "addatoy",
        element: (
          <PrivetRoutes>
            <AddAToy />
          </PrivetRoutes>
        ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/mytoys/:id",
        element: <EditToys />,
      },
      {
        path: '/viewdetails/:id',
        element:<ViewDetails></ViewDetails>
      }
      
    ],
  },
]);

export default router
