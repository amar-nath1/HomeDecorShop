import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useContext, useState } from "react"
import Cart from "./Cart/Cart"
import CartContext from "../store/cart-context"

import { NavLink } from "react-router-dom"

const NavBar=()=>{

    const [showCart,setShowCart]=useState(false)

    const showCartHandler=(TOrF)=>{

        TOrF===false?setShowCart(false):setShowCart(true)
        
    }

    const currentItems=useContext(CartContext).items
    let totalQuantity=0
    currentItems.forEach((item)=>{

        return totalQuantity+=Number(item.quantity)
    })

    return (
<>
        <Navbar bg='light' expand='sm' variant='dark'>
            <Container className="d-flex justify-content-center"> 

                <Nav.Link className="m-2" href='#'>HOME</Nav.Link>
                <Nav.Link className="m-2" href='#'>STORE</Nav.Link>
                <NavLink className="m-2" to='/about'>ABOUT</NavLink>
            </Container>

            <Button className='me-4 pe-0' variant="secondary" onClick={showCartHandler}>Cart <span className="rounded-circle p-1 mb-2 bg-warning text-black m-3 border border-success">{totalQuantity}</span></Button>
            
        </Navbar>
        {showCart && <Cart handleShowCart={showCartHandler}></Cart>}
        </>
    )

}

export default NavBar