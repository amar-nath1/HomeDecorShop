import { Button, Card, Col, Container, Row } from "react-bootstrap"
import classes from './WallDecor.module.css'

const GardenDecor=()=>{

    return (
        
        <Container>
            <h1 className="d-flex flex-row justify-content-center m-3">Garden Decor</h1>
            
            <Row className="mb-4">

                <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">Test Tube Glass Planter</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src='https://imgshopnewgumlet.lbb.in/catalog/product/t/e/test_tube_glass_planter-1-01.jpeg?fm=webp&w=480&h=480&dpr=1' height='350rem'/>
                    <Card.Body className="d-flex justify-content-between">

                    <Card.Title> Rs. 1999</Card.Title>
                    <Button variant="primary">Add to Cart</Button>

                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">Pot With Stand</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src='https://imgshopnewgumlet.lbb.in/catalog/product/c/h/ch20302d.jpg?fm=webp&w=480&h=480&dpr=1' height='350rem'/>
                    <Card.Body className="d-flex justify-content-between">

                        <Card.Title>Rs. 2999 </Card.Title>
                        <Button variant="primary">Add to Cart</Button>
                        
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            
            
        </Container>
        
    )
}

export default GardenDecor