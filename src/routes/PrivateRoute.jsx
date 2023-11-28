import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!loggedUser) {
        return <Navigate to="/log-in" />
    }

    return <Outlet />
}

export default PrivateRoute