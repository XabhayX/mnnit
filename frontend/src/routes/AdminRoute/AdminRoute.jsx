import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext.js";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const {user, setUser} = useContext(UserContext);
    console.log(user.role)

    if (user?.role === "admin") {
        return children;
    }
    return <Navigate to="/" replace />;
};

export default AdminRoute;
