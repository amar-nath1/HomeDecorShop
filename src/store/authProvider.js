
import axios from "axios"
import { useContext, useEffect, useState } from "react"

import AuthContext from "./auth-context"
const AuthProvider=(props)=>{


    const authCtx=useContext(AuthContext)
    const a=localStorage.getItem('token')
    const initToken=JSON.parse(a)
        
    const [token,setToken]=useState(initToken? initToken.tok: null)
    const [userEmail,setUserEmail]=useState(initToken?initToken.email : null)

    const userIsLoggedIn=!!token

    const loginHandle=(token,email)=>{
        setToken(token)
        setUserEmail(email)
    }

    const logoutHandle=()=>{
        setToken(null)
    }

    const authCtxValues={
        token:token,
        email:userEmail,
        isLoggedIn:userIsLoggedIn,
        loginHandle:loginHandle,
        logoutHandle:logoutHandle
    }

    return(
        <AuthContext.Provider value={authCtxValues}>{props.children}</AuthContext.Provider>
    )
}

export default AuthProvider