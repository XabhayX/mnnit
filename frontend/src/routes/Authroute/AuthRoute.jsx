import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../hooks/UserContext';

const AuthRoute = ({children}) => {

    console.log('AuthRoute is active')

        const {user, setUser} = useContext(UserContext);
        
        const currentUser = {
            name: "abhay", 
            class:"12", 
            role: "admin"
        }
    
        useEffect(() => {
          
          setUser(currentUser)
         
        }, [])


  return (
    children
  )
}

export default AuthRoute