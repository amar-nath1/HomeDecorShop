
import { useState } from "react"

import AuthContext from "./auth-context"
const AuthProvider=(props)=>{
    const initToken=localStorage.getItem('token')
    const [token,setToken]=useState(initToken)

    const userIsLoggedIn=!!token

    const loginHandle=(token)=>{
        setToken(token)
    }

    const logoutHandle=()=>{
        setToken(null)
    }

    const authCtxValues={
        token:token,
        isLoggedIn:userIsLoggedIn,
        loginHandle:loginHandle,
        logoutHandle:logoutHandle
    }

    return(
        <AuthContext.Provider value={authCtxValues}>{props.children}</AuthContext.Provider>
    )
}

export default AuthProvider