import { Card, Col, Container, ListGroup, ListGroupItem, Navbar, Row } from "react-bootstrap"
import NavLinks from "../Component/NavBar/NavLinks"

import classes from './HomePage.module.css'

import Footer from "../Component/Footer/Footer"

const HomePage=()=>{

    return (
        <>
        <Navbar bg='dark' expand='sm' variant='dark' className="fixed-top">
        <NavLinks></NavLinks>
        </Navbar>
        <Container className={classes.homeContainer}>
            

            <Row>

                <Col> 

                <Card body className='text-center mb-2' bg='light'> <h3>Welcome to Take Me Home Decor Shop</h3></Card>
               
                </Col>
                
            </Row>

            <span className="text-center"><h3 className="m-3 mb-4">Features</h3></span>

            <Row>

            <Col> <Card style={{width:'18rem'}}>
                <Card.Header>USP 1</Card.Header>
                <Card.Body>
                    <Card.Title>100% Handmade</Card.Title>
                    <Card.Text>Each Items are made by our own artisans. Items are 100 % handmade. </Card.Text>
                </Card.Body>
            </Card>

               
               </Col>

               <Col> <Card style={{width:'18rem'}}>
                <Card.Header>USP 2</Card.Header>
                <Card.Body>
                    <Card.Title>100% Handmade</Card.Title>
                    <Card.Text>Each Items are made by our own artisans. Items are 100 % handmade. </Card.Text>
                </Card.Body>
            </Card>
            
               
               </Col>

               <Col> <Card style={{width:'18rem'}}>
                <Card.Header>USP 3</Card.Header>
                <Card.Body>
                    <Card.Title>100% Handmade</Card.Title>
                    <Card.Text>Each Items are made by our own artisans. Items are 100 % handmade. </Card.Text>
                </Card.Body>
            </Card>
            
               
               </Col>

            </Row>

            <Card className='mt-4 mb-5'>
                <Card.Header className='text-center'><h5>Our Categories</h5></Card.Header>
                
                
                <Row>

                    <Col>
                    <ListGroup variant='flush' className='text-center'>
                    <ListGroupItem>Wall Decor</ListGroupItem>
                    <ListGroupItem>Table Decor</ListGroupItem>
                    <ListGroupItem>Garden Decor</ListGroupItem>
                    <ListGroupItem>Kitchen Decor</ListGroupItem>

                </ListGroup>
                    </Col>
                   
                    <Col>
                    <ListGroup variant='flush' className='text-center'>
                    <ListGroupItem>Wall Decor</ListGroupItem>
                    <ListGroupItem>Table Decor</ListGroupItem>
                    <ListGroupItem>Garden Decor</ListGroupItem>
                    <ListGroupItem>Kitchen Decor</ListGroupItem>

                </ListGroup>
                    </Col>

                    <Col>
                    <ListGroup variant='flush' className='text-center'>
                    <ListGroupItem>Wall Decor</ListGroupItem>
                    <ListGroupItem>Table Decor</ListGroupItem>
                    <ListGroupItem>Garden Decor</ListGroupItem>
                    <ListGroupItem>Kitchen Decor</ListGroupItem>

                </ListGroup>
                    </Col>
                </Row>
                
            </Card>
        </Container>

        <Footer></Footer>
        </>

    )
}

export default HomePage