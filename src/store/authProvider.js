
import { useState } from "react"

import authContext from "./auth-context"
const AuthProvider=()=>{

    const [isAuthorized,setIsAuthorized]=useState(false)

    const authHandle=(auth)=>{
        setIsAuthorized(auth)
    }

    const authCtxValues={
        authorized:isAuthorized,
        authHandle:authHandle
    }

    return(
        <authContext.Provider value={authCtxValues}>{props.children}</authContext.Provider>
    )
}

export default AuthProvider