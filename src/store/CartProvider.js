import { useState } from "react"
import CartContext from "./cart-context"


const CartProvider=(props)=>{

    const [items,setItems]=useState([])

    

    const addItemToCartHandler=(itemObj)=>{

        setItems((prev)=>{

            let exiItemIndx=prev.findIndex((item)=>{

                return item.id===itemObj.id
            })


            if (exiItemIndx === -1) {

                return [...prev, itemObj]
            }

            else{

                let intQty=parseInt(prev[exiItemIndx].quantity)
                prev[exiItemIndx].quantity=intQty+Number(itemObj.quantity)

                return [...prev]
            }
        })

    }

    const removeItemFromCartHandler=(id)=>{


    }


    const cartContextValues={
        items:items,
        totalQty:items.length,
        addItem:addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    }

    return (

        <CartContext.Provider value={cartContextValues}>{props.children}</CartContext.Provider>

    )
}

export default CartProvider
