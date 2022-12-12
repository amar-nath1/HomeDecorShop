import React from 'react';
import NavBar from './Component/NavBar';

import Items from './Component/Items/Items';
import { Button } from 'react-bootstrap';
import Footer from './Component/Footer/Footer';

function App() {


  return (
    <>
    <NavBar></NavBar>
    <div className="d-flex flex-row justify-content-center border border-primary mt-2 bg-warning">
  <h3 className="p-2">Take Me Home Decor</h3>
  
</div>
      
        <Items></Items>
        <div className='d-flex justify-content-center'>
        <Button variant='success' size='lg' className='m-4'> Go to your Cart</Button>
        </div>

        <Footer></Footer>
     
      </>
      
  );
}

export default App;
