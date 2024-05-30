import * as React from "react";
import { LoginPage, RegisterPage } from "~src/features";

export const mainRoutes = [
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
];  