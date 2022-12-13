import { Card, Col, Container, Row } from "react-bootstrap"
import AddToCartButton from "./AddToCartButton"
import classes from './WallDecor.module.css'

const GardenDecor=()=>{

    const gardenDecorItems=[
        {
        id:'4',
        title: 'Test Tube Glass Planter',
        
        price: 100,
        
        imageUrl: 'https://imgshopnewgumlet.lbb.in/catalog/product/t/e/test_tube_glass_planter-1-01.jpeg?fm=webp&w=480&h=480&dpr=1',
        
        quantity: 2
        },

        {
            id:'5',
            title: 'Pot With Stand',
            
            price: 100,
            
            imageUrl: 'https://imgshopnewgumlet.lbb.in/catalog/product/c/h/ch20302d.jpg?fm=webp&w=480&h=480&dpr=1',
            
            quantity: 2
            },

            {
                id:'6',
                title:'Table Top Planter',
                price:799,
                imageUrl:'https://imgshopnewgumlet.lbb.in/catalog/product/2/4/24.2.2_table_top_planter_-_bamboo.jpg?fm=webp&w=480&h=480&dpr=1',
                quantity:5
            }

    ]

    const showGDitems=gardenDecorItems.map((item)=>{
        return <Col>
        <Card style={{width:'18rem'}}>
            <Card.Header className="text-center">{item.title}</Card.Header>
            <Card.Img className={classes.imgHover} variant="top" src={item.imageUrl} height='350rem'/>
            <Card.Body className="d-flex justify-content-between">

            <Card.Title> {item.price}</Card.Title>
            <AddToCartButton item={item}></AddToCartButton>

            </Card.Body>
        </Card>
        </Col>
    })

    return (
        
        <Container>
            <h1 className="d-flex flex-row justify-content-center m-3">Garden Decor</h1>
            
            <Row className="mb-4">

                
                {showGDitems}
            </Row>
            
            
        </Container>
        
    )
}

export default GardenDecor