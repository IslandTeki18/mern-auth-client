import * as React from "react";
import { LoginPage, RegisterPage, HomePage } from "~src/features";
import { Navbar } from "~src/components";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "~src/hooks/useAuthContext";

function AuthenticationLayout() {
    const { userInfo } = useAuthContext()
    return (
        <>
            {userInfo && <Navbar />}
            <Outlet />
        </>
    )
}

export const mainRoutes = [
    {
        element: <AuthenticationLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ]
    },

];  