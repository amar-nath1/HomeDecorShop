import { useContext, useState, useEffect } from "react"
import AuthContext from "./auth-context"

import CartContext from "./cart-context"
import axios from "axios"


const CartProvider = (props) => {

    const authCtx=useContext(AuthContext)

    
        if(authCtx.isLoggedIn){

            axios.get(`https://crudcrud.com/api/651b072f0c3343d4a2a5d8760cd2c5b7/cart${authCtx.email.replace(/\W/g, '')}`)
        .then((res)=>{localStorage.setItem(authCtx.email,JSON.stringify(res.data))})

        }
        
    let myCartArr=JSON.parse(localStorage.getItem(authCtx.email))


    const [items, setItems] = useState(myCartArr?myCartArr:[])

    const addItemToCartHandler = (itemObj) => {
        
        setItems((prev) => {
            
            let exiItemIndx = prev.findIndex((item) => {

                return item.id === itemObj.id
            })

            if (exiItemIndx === -1) {
                
                
                return [...prev, itemObj]
            }

            else {

                let intQty = parseInt(prev[exiItemIndx].quantity)
                prev[exiItemIndx].quantity = intQty + Number(itemObj.quantity)
               
              
                return [...prev]
            }
            
        })

    }

    const removeItemFromCartHandler = (itemObj, qtyORitem) => {

        setItems((prev) => {

            let exiItemIndx = prev.findIndex((item) => {
                return item.id === itemObj.id
            })

            if (exiItemIndx === -1) {
             
                return [...prev]
            }

            else {
                const exItemQty = prev[exiItemIndx].quantity

                if (qtyORitem === 'remItem') {
                    prev.splice(exiItemIndx, 1)
                  
                    return [...prev]
                }
                else {

                    if (qtyORitem === 'decQty') {

                        if ((exItemQty - 1) > 0) {
                            prev[exiItemIndx].quantity = exItemQty - 1
                           
                            return [...prev]
                        }
                        else {
                            prev.splice(exiItemIndx, 1)
                           
                            return [...prev]

                        }
                    }

                  

                }

            }

        })

    }


  

    const cartContextValues = {
        items: items,
        
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    }

    return (

        <CartContext.Provider value={cartContextValues}>{props.children}</CartContext.Provider>

    )
}

export default CartProvider
