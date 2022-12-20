import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import classes from './WallDecor.module.css'

const WallDecor=()=>{

    const wallDecorItems=[

        {
            id:'1',
        title: 'Wood Wall Art',
        
        price: 100,
        
        imageUrl:{      
img1:'https://imgshopnewgumlet.lbb.in/catalog/product/w/m/wmdfco150_main_hd.jpg?fm=webp&w=480&h=480&dpr=1',
img2: 'https://imgshopnewgumlet.lbb.in/catalog/product/w/m/wmdfco150_main_hd1.jpg?fm=webp&w=750&h=500&dpr=1',
img3: 'https://imgshopnewgumlet.lbb.in/catalog/product/w/m/wmdfco150_main_wdim.jpg?fm=webp&w=750&h=500&dpr=1'},

        quantity: 2,
        reviews:'2/5'
        },

        {
            id:'2',
            title: 'Girl With A Swag',
            
            price: 100,
            
            imageUrl:{
                img1:'https://imgshopnewgumlet.lbb.in/catalog/product/g/o/goingdesi076.jpg?fm=webp&w=480&h=480&dpr=1',
                img2: 'https://imgshopnewgumlet.lbb.in/catalog/product/g/o/goingdesi077.jpg?fm=webp&w=750&h=500&dpr=1',
                img3: 'https://imgshopnewgumlet.lbb.in/catalog/product/g/o/goingdesi078.jpg?fm=webp&w=750&h=500&dpr=1',
            },
            
            quantity: 2,
            reviews:'3/5'
            },

            {
                id:'3',
                title: 'Antique Wall Lantern',
                
                price: 100,
                
                imageUrl: {
                img1:'https://imgshopnewgumlet.lbb.in/catalog/product/c/o/copy_of_001_2.jpg?fm=webp&w=480&h=480&dpr=1',
                img2:'https://imgshopnewgumlet.lbb.in/catalog/product/c/o/copy_of_005_2.jpg?fm=webp&w=750&h=500&dpr=1',
                img3:'https://imgshopnewgumlet.lbb.in/catalog/product/c/o/copy_of_003_5.jpg?fm=webp&w=750&h=500&dpr=1'
                },
                quantity: 2,
                reviews:'4/5'
                },
    ]

    const showWDitems=wallDecorItems.map((item)=>{
        return (

            <Col key={item.id}>
                
                <Card style={{width:'18rem'}}>
                    <Card.Header className="text-center">{item.title}</Card.Header>
                    <Link to={{pathname:`/productDetails/${item.id}`,state:{id:item.id,title:item.title,price:item.price,imageUrl:item.imageUrl,quantity:item.quantity,reviews:item.reviews}}}> <Card.Img className={classes.imgHover} variant="top" src={item.imageUrl.img1} height='350rem'/></Link>
                    <Card.Body className="d-flex justify-content-between">

                    <Card.Title>Rs. {item.price}</Card.Title>
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