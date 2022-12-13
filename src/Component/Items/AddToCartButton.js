import { useContext } from "react"
import { Button } from "react-bootstrap"
import CartContext from "../../store/cart-context"


const AddToCartButton=(props)=>{

    const addItemCtx=useContext(CartContext)

    const addItemHandler=()=>{
        
        addItemCtx.addItem(props.item)

    }

    return (

        <Button variant="primary" onClick={addItemHandler}>Add to Cart</Button>

    )
}

export default AddToCartButton