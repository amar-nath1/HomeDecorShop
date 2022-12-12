import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar=()=>{

    return (

        <Navbar bg='light' expand='sm' variant='dark'>
            <Container className="d-flex justify-content-center"> 

                <Nav.Link className="m-2" href='#'>HOME</Nav.Link>
                <Nav.Link className="m-2" href='#'>STORE</Nav.Link>
                <Nav.Link className="m-2" href='#'>ABOUT</Nav.Link>
            </Container>
        </Navbar>

    )

}

export default NavBar