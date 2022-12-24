import { useContext} from "react"
import { Button } from "react-bootstrap"
import CartContext from "../../store/cart-context"

import AuthContext from "../../store/auth-context"
import { useHistory } from "react-router-dom"

import PostCrudContext from "../../store/postcrud-context"

const AddToCartButton=(props)=>{
    const history=useHistory()

    const authCtx=useContext(AuthContext)

    const addItemCtx=useContext(CartContext)
    
    const crudPostCtx=useContext(PostCrudContext)
    

    const addItemHandler=()=>{

        if (authCtx.isLoggedIn){
            
            addItemCtx.addItem({...props.item,quantity:1})
        
          crudPostCtx.addToCrud(props.item)

        }

        else{
            history.replace('/auth')
        }
    }
   

    return (

        <Button variant="primary" onClick={addItemHandler}>Add to Cart</Button>

    )
}

export default AddToCartButton