import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
    const isAuthenticated = localStorage.getItem("auth");
    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
