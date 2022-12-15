import { useState } from "react"
import {Container, Navbar } from "react-bootstrap"

import Footer from "../Component/Footer/Footer"
import NavLinks from "../Component/NavBar/NavLinks"

const Contact=()=>{
    
  const onSubmit = async(e) => {
    e.preventDefault()
    
    const { name, email, phone } = e.target.elements
    let contactForm = {
      name: name.value,
      email: email.value,
      Phone: phone.value,
    }
   await fetch('https://ecom-contact-us-default-rtdb.firebaseio.com/contact.json',{

   method:'POST',
   body:JSON.stringify(contactForm),
   headers:{
    'Content-Type':'application/json'
   }

   }).then((res)=>{console.log('successfully posted',res)})

}

    return (
<>
        <Navbar bg='dark' expand='sm' variant='dark' className="navbar-static-top">
        <NavLinks></NavLinks>
        </Navbar>
        

        <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Phone No.
          </label>
          <input className="form-control" type='number' id="phone" required />
        </div>
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
    </div>

        <Footer/>
        </>

    )
}

export default Contact