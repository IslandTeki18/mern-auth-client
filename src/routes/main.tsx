import * as React from "react";
import { LoginPage, RegisterPage, HomePage, DashboardPage } from "~src/features";
import { Navbar } from "~src/components";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "~src/hooks/useAuthContext";

function AuthenticationLayout() {
    const { userInfo } = useAuthContext()
    return (
        <>
            {userInfo && <Navbar />}
            {userInfo ? (<Outlet />) : (<Navigate to="/" replace={true} />)}
        </>
    )
}

export const mainRoutes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        element: <AuthenticationLayout />,
        children: [
            {
                path: "dashboard",
                element: <DashboardPage />,
            },
        ]
    },

];  