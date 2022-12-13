
import Card from './Card'
import { Button, Image } from 'react-bootstrap'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import React, { useContext } from 'react'



const Cart=(props)=>{

  const cartElements=useContext(CartContext).items

  const closeHandler=()=>{

    props.handleShowCart(false)
    console.log('close button clicked')
  }

    

        let totalAmount=0
          const cartItems=cartElements.map((item)=>{
           totalAmount+=(item.quantity*item.price)

            return (

              <React.Fragment key={item.id}>

            <div className={classes.content}>

            <img src={item.imageUrl} className={classes.img}/>
              
             <div> <p>{item.title}</p><Button className='btn btn-secondary btn-sm'>Delete</Button></div></div>
            <header className={classes.header}>
                <p>Qty- {item.quantity}</p><h5>Rs. {(item.quantity*item.price).toFixed(2)}</h5>
                
            </header>
            
            </React.Fragment>

            )
          })
           

    return (


      <Card className={classes.modal}>
        <h2 align='center'>My Cart</h2>
           
      {cartItems}
      <div className={classes.totalAmt}><h3>Total Amount</h3><h3> Rs. {totalAmount.toFixed(2)}</h3></div>

          <footer className={classes.actions}><Button onClick={closeHandler}>Close</Button><Button>Order</Button></footer>
      </Card>
     

    )
}

export default Cart