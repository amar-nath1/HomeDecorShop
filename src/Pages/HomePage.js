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

                <Card body className='text-center mb-2' bg='warning'> <h3>Welcome to Take Me Home Decor Shop</h3></Card>
               
                </Col>
                
            </Row>
            <Card>
                <Card.Img src='https://cdn.shopify.com/s/files/1/0648/6661/5512/files/Picture1_35bc787e-5fa9-47d6-b8aa-c06292c3557d_1400x.jpg?v=1664521448'></Card.Img>
            </Card>

            <span className="text-center"><h3 className="m-3 mb-4">Features</h3></span>

            <Row>

            <Col> <Card style={{width:'18rem'}}>
                <Card.Header className='bg-danger text-white'>USP 1</Card.Header>
                <Card.Body>
                    <Card.Title>100% Handmade</Card.Title>
                    <Card.Text>Each Items are made by our own artisans. Items are 100 % handmade. </Card.Text>
                </Card.Body>
            </Card>

               
               </Col>

               <Col> <Card style={{width:'18rem'}}>
                <Card.Header className='bg-success text-white'>USP 2</Card.Header>
                <Card.Body>
                    <Card.Title>Safe Delivery</Card.Title>
                    <Card.Text>We make sure that the item is delivered safely </Card.Text>
                </Card.Body>
            </Card>
            
               
               </Col>

               <Col> <Card style={{width:'18rem'}}>
                <Card.Header className='bg-primary text-white'>USP 3</Card.Header>
                <Card.Body>
                    <Card.Title>Quality Assurance</Card.Title>
                    <Card.Text>Supreme Quality of each item is our utmost priority </Card.Text>
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