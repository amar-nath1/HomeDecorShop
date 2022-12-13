import { Card, Col, Container, Row } from "react-bootstrap"
import AddToCartButton from "./AddToCartButton"
import classes from './WallDecor.module.css'

const WallDecor=()=>{

    const wallDecorItems=[

        {
            id:'1',
        title: 'Wood Wall Art',
        
        price: 100,
        
        imageUrl: 'https://imgshopnewgumlet.lbb.in/catalog/product/w/m/wmdfco150_main_hd.jpg?fm=webp&w=480&h=480&dpr=1',
        
        quantity: 2
        },

        {
            id:'2',
            title: 'Girl With A Swag',
            
            price: 100,
            
            imageUrl: 'https://imgshopnewgumlet.lbb.in/catalog/product/g/o/goingdesi076.jpg?fm=webp&w=480&h=480&dpr=1',
            
            quantity: 2
            },

            {
                id:'3',
                title: 'Antique Wall Lantern',
                
                price: 100,
                
                imageUrl: 'https://imgshopnewgumlet.lbb.in/catalog/product/c/o/copy_of_001_2.jpg?fm=webp&w=480&h=480&dpr=1',
                
                quantity: 2
                },
    ]

    

    const showWDitems=wallDecorItems.map((item)=>{
        return (

            <Col>
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">{item.title}</Card.Header>
                    <Card.Img className={classes.imgHover} variant="top" src={item.imageUrl} height='350rem'/>
                    <Card.Body className="d-flex justify-content-between">

                    <Card.Title>{item.price}</Card.Title>
                    <AddToCartButton item={item}></AddToCartButton>

                    </Card.Body>
                </Card>
                </Col>
            
        )
    })

    return (

        <Container>
            <h1 className="d-flex flex-row justify-content-center m-3">Wall Decor</h1>
            <Row className="mb-4">

                
               {showWDitems}
            </Row>
            

            
        </Container>
    )
}

export default WallDecor