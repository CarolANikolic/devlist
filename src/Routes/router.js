import { createBrowserRouter, Navigate } from "react-router-dom";
import Protected from "../common/utils/Protected";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Projects from "../pages/Projects";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Navigate replace to="/projects/:userid" />,
            },
            {
                path: "/projects/:userid",
                element: (
                    <Protected>
                        <Projects />
                    </Protected>
                ),
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
        ],
    },
]);
