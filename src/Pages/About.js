import {Container, Navbar } from "react-bootstrap"

import Footer from "../Component/Footer/Footer"
import NavLinks from "../Component/NavBar/NavLinks"

const About=()=>{

    return (
<>
        <Navbar bg='dark' expand='sm' variant='dark' className="navbar-static-top">
        <NavLinks></NavLinks>
        </Navbar>
        <Container className='mt-4'>
        <h2>About Us</h2>
        At House Beautiful, we're dedicated to bringing you the best in inspiration and education for your home. Founded in 1896, we are the oldest continually-published design magazine in the United States, and we are proud to carry on the legacy of great design that was started 125 years ago. Whether you're hiring a designer for a complete redecoration or dipping your toes in DIY, you'll find smart tips and designer-tested ideas across our magazine pages, website, and videos. Just looking to daydream? Explore our home tours for pinnable interiors of every style
        
        </Container>
        <Footer/>
        </>

    )
}

export default About