
import Card from './Card'
import { Button} from 'react-bootstrap'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import React, { useContext } from 'react'
import PostCrudContext from '../../store/postcrud-context'



const Cart=(props)=>{

  const cartCtx=useContext(CartContext)
  const cartElements=cartCtx.items
  
  const crudPostCtx=useContext(PostCrudContext)

  const closeHandler=()=>{

    props.handleShowCart(false)
    
  }

        let totalAmount=0
          const cartItems=cartElements.map((item)=>{
           totalAmount+=(item.quantity*item.price)

            return (

              <React.Fragment key={item.id}>

            <div className={classes.content}>

            <img src={item.imageUrl.img1} className={classes.img}/>
              
             <div> <p>{item.title}</p><Button onClick={()=>{
              
              cartCtx.removeItem(item,'remItem')
              crudPostCtx.addToCrud(item,'rem')
              
              }} className='btn btn-secondary btn-sm'>Delete</Button></div></div>
            <header className={classes.header}>
                <p>Qty- {item.quantity}</p>
                
                <button className={classes.reduceItem} onClick={()=>{
                  
                  cartCtx.removeItem(item,'decQty')
                  crudPostCtx.addToCrud(
                    
                    {
                      id:item.id,
                      title:item.title,
                      price:item.price,
                      imageUrl:item.imageUrl,
                      inStock:item.inStock,
                      reviews:item.reviews
                    }

                    ,'dec')

                }}>-</button> <button className={classes.reduceItem} onClick={()=>{
                  
                  cartCtx.addItem({...item,quantity:1})
                 
                  crudPostCtx.addToCrud({
                    id:item.id,
                    title:item.title,
                    price:item.price,
                    imageUrl:item.imageUrl,
                    inStock:item.inStock,
                    reviews:item.reviews
                  })
                  
                  }}>+</button>
                
                <h5>Rs. {(item.quantity*item.price).toFixed(2)}</h5>
                
            </header>
            
            </React.Fragment>

            )
          })
           

    return (


      <Card className={classes.modal}>
        <h2 align='center'>My Cart</h2>
           
      {cartItems}
      <div className={classes.totalAmt}><h3>Total Amount</h3><h3> Rs. {totalAmount.toFixed(2)}</h3></div>

          <footer className={classes.actions}><Button className='m-2' onClick={closeHandler}>Close</Button><Button className='m-2'>Order</Button></footer>
      </Card>
     

    )
}

export default Cart