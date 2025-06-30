import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../hooks/UserContext';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {

    console.log('AuthRoute is active')

        const {user, setUser} = useContext(UserContext);
        
        if(user.role == "student" || user.role == "admin" || user.role == "staff" || user.role == "tester") return (children)

        return (<Navigate to="/" replace />)
}

export default AuthRoute