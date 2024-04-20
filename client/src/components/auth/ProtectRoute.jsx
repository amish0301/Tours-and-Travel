import { Navigate, Outlet } from "react-router-dom"

export const ProtectRoute = ({ user, children, redirect = "/login" }) => {
    if (!user) return <Navigate to={redirect} />
    return children ? children : <Outlet />
}