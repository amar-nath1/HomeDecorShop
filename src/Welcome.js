import React from 'react';
import NavBar from './Component/NavBar';

import Items from './Component/Items/Items';
import { Button } from 'react-bootstrap';
import Footer from './Component/Footer/Footer';

import { useState } from 'react';
import Cart from './Component/Cart/Cart';
import CartProvider from './store/CartProvider';


function Welcome() {

  const [showCart,setShowCart]=useState(false)

  const showCartHandler=(TOrF)=>{

    TOrF===false?setShowCart(false):setShowCart(true)
    
}


  return (
    <CartProvider>
    <NavBar></NavBar>
    <div className="d-flex flex-row justify-content-center border border-primary mt-2 bg-warning">
  <h3 className="p-2">Take Me Home Decor</h3>
  
</div>

{showCart && <Cart handleShowCart={showCartHandler}></Cart>}
      
        <Items></Items>
        <div className='d-flex justify-content-center'>
        <Button onClick={showCartHandler} variant='success' size='lg' className='m-4'> Go to your Cart</Button>
        </div>

        

        <Footer></Footer>
     
      </CartProvider>
      
  );
}

export default Welcome;
