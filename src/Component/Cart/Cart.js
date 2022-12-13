
import Card from './Card'
import { Button, Image } from 'react-bootstrap'
import classes from './Cart.module.css'



const Cart=(props)=>{

  const closeHandler=()=>{

    props.handleShowCart(false)
    console.log('close button clicked')
  }

    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1
        
        }
        
        ]

        let totalAmount=0
          const cartItems=cartElements.map((item)=>{
           totalAmount+=(item.quantity*item.price)

            return (

              <>

            <div className={classes.content}>

            <img src={item.imageUrl} className={classes.img}/>
              
             <div> <p>{item.title}</p><Button className='btn btn-secondary btn-sm'>Delete</Button></div></div>
            <header className={classes.header}>
                <p>Qty- {item.quantity}</p><h5>Rs. {(item.quantity*item.price).toFixed(2)}</h5>
                
            </header>
            
            </>

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