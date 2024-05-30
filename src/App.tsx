import * as React from 'react'
import { AppRoutes } from './routes'
import { AuthProvider } from './context/AuthContext'

export const App = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}