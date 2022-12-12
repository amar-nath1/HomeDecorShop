import { Button, Card, Col, Container, Row } from "react-bootstrap"
import classes from './WallDecor.module.css'

const WallDecor=()=>{

    return (

        <Container>
            <h1 className="d-flex flex-row justify-content-center m-3">Wall Decor</h1>
            <Row className="mb-4">

                <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">Wood Wall Art</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src='https://imgshopnewgumlet.lbb.in/catalog/product/w/m/wmdfco150_main_hd.jpg?fm=webp&w=480&h=480&dpr=1' height='350rem'/>
                    <Card.Body className="d-flex justify-content-between">

                    <Card.Title> Rs. 1799</Card.Title>
                    <Button variant="primary">Add to Cart</Button>

                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">Girl With A Swag</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src='https://imgshopnewgumlet.lbb.in/catalog/product/g/o/goingdesi076.jpg?fm=webp&w=480&h=480&dpr=1' height='350rem'/>
                    <Card.Body className="d-flex justify-content-between">

                        <Card.Title>Rs. 599 </Card.Title>
                        <Button variant="primary">Add to Cart</Button>
                        
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className="mb-4">

                <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">Antique Wall Lantern</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src='https://imgshopnewgumlet.lbb.in/catalog/product/c/o/copy_of_001_2.jpg?fm=webp&w=480&h=480&dpr=1' height='350rem'/>
                    <Card.Body className='d-flex justify-content-between'>

                        <Card.Title>Rs. 699</Card.Title>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">Evil Eye Wall Hanging</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src='https://imgshopnewgumlet.lbb.in/catalog/product/-/c/-ct6_2_.jpg?fm=webp&w=480&h=480&dpr=1' height='350rem'/>
                    <Card.Body className='d-flex justify-content-between'>
                        <Card.Title>Rs. 1199</Card.Title>
                        <Button variant='primary'>Add to Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            
        </Container>
    )
}

export default WallDecor