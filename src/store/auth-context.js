

const authContext=React.createContext({
    authorize:false,
    authHandle:(auth)=>{}
})

export default authContext