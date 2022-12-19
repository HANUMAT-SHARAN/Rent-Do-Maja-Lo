import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
export default function PrivateRoute({children}) {
    
    const {isAuth}=React.useContext(AuthContext)

    if(!isAuth.auth){
        return <Navigate to="/" />
    }

    return (
        <>
           {children} 
        </>
    )
}
