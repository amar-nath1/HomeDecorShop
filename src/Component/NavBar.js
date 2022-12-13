import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useContext, useState } from "react"
import Cart from "./Cart/Cart"
import CartContext from "../store/cart-context"

const NavBar=()=>{

    const [showCart,setShowCart]=useState(false)

    const showCartHandler=(TOrF)=>{

        TOrF==false?setShowCart(false):setShowCart(true)
        
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
                <Nav.Link className="m-2" href='#'>ABOUT</Nav.Link>
            </Container>

            <Button variant="info" onClick={showCartHandler}>Cart </Button><span className="m-3">{totalQuantity}</span>
            
        </Navbar>
        {showCart && <Cart handleShowCart={showCartHandler}></Cart>}
        </>
    )

}

export default NavBar