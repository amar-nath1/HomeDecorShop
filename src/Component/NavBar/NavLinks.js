import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import classes from './NavLinks.module.css'

const NavLinks=()=>{

    return (

        
            <Container className={`d-flex justify-content-center navbar-static-top ${classes.header}`}> 

                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/welcome'><h5>HOME</h5></NavLink>
                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/store'><h5>STORE</h5></NavLink>
                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/about'><h5>ABOUT</h5></NavLink>
                <NavLink activeClassName={classes.active} className={`m-2 text-white text-decoration-none`} to='/contact'><h5>CONTACT US</h5></NavLink>
            </Container>

    )
}

export default NavLinks