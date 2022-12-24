
import React from 'react'
const AuthContext=React.createContext({
    token:null,
    email:null,
    isLoggedIn:false,
    loginHandle:(auth)=>{},
    logoutHandle:()=>{}
})

export default AuthContext