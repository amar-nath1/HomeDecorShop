import { useContext } from "react"
import {Container} from "react-bootstrap"
import { NavLink, useHistory } from "react-router-dom"
import AuthContext from "../../store/auth-context"
import classes from './NavLinks.module.css'

const NavLinks=()=>{
    const history=useHistory()
const authCtx=useContext(AuthContext)
    return (

        
            <Container className={`d-flex justify-content-center navbar-static-top ${classes.header}`}> 

                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/welcome'><h5>HOME</h5></NavLink>
                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/store'><h5>STORE</h5></NavLink>
                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/about'><h5>ABOUT</h5></NavLink>
                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/contact'><h5>CONTACT US</h5></NavLink>
                {!authCtx.isLoggedIn && <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/auth'><h5>LOGIN</h5></NavLink>}
                {authCtx.isLoggedIn && <NavLink className={`m-2 text-white text-decoration-none`} to='/store' onClick={()=>{
              localStorage.removeItem('token')
              authCtx.logoutHandle()
              history.replace('/store')
              }}><h5>LOGOUT</h5></NavLink>}
            </Container>

    )
}

export default NavLinks