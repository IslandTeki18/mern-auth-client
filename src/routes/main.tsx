import * as React from "react";
import { useEffect } from "react";
import { LoginPage, RegisterPage, HomePage, DashboardPage } from "~src/features";
import { Navbar } from "~src/components";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "~src/hooks/useAuthContext";

function AuthenticationLayout() {
    const { user } = useAuthContext()

    return (
        <>
            {user !== null && <Navbar />}
            <Outlet />
        </>
    )
}

function ProtectedRoute({ element }: { element: React.ReactElement }) {
    const { user } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigate("/")
        }
    }, [user, navigate])

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