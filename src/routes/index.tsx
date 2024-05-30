import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { mainRoutes } from "./main";

export function AppRoutes() {
    const routes = [...mainRoutes];
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}