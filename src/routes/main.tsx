import * as React from "react";
import { useEffect } from "react";
import { LoginPage, RegisterPage, HomePage, DashboardPage } from "~src/features";
import { Navbar } from "~src/components";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "~src/hooks/useAuthContext";

function AuthenticationLayout() {
    const { userInfo } = useAuthContext()

    return (
        <>
            {userInfo !== null && <Navbar />}
            <Outlet />
        </>
    )
}

function ProtectedRoute({ element }: { element: React.ReactElement }) {
    const { userInfo } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo === null) {
            navigate("/")
        }
    }, [userInfo, navigate])

    return element
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
                path: "/dashboard",
                element: <ProtectedRoute element={<DashboardPage />} />,
            },
        ]
    },

];  