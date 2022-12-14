
import { useContext, useState } from "react"
import Cart from "../Cart/Cart"
import CartContext from "../../store/cart-context"


import NavLinks from "./NavLinks"
import { Button, Navbar } from "react-bootstrap"

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

<Navbar bg='dark' expand='sm' variant='dark' className="fixed-top">
<NavLinks totalQuantity={totalQuantity} showCartHandler={showCartHandler}></NavLinks>
<Button className='me-4 pe-0' variant="secondary" onClick={showCartHandler}>Cart <span className="rounded-circle p-1 mb-2 bg-warning text-black m-3 border border-success">{totalQuantity}</span></Button>
</Navbar>
        
        {showCart && <Cart handleShowCart={showCartHandler}></Cart>}
        </>
    )

}

export default NavBar