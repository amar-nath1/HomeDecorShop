import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import classes from './WallDecor.module.css'

const GardenDecor=()=>{

    const gardenDecorItems=[
        {
        id:'4',
        title: 'Terracotta Planter',
        
        price: 1090,
        
        imageUrl: {
            img1:'https://imgshopnewgumlet.lbb.in/catalog/product/p/2/p2_18.jpg?fm=webp&w=480&h=480&dpr=1',
            img2:'https://imgshopnewgumlet.lbb.in/catalog/product/p/2/p2_1_.jpg?fm=webp&w=750&h=500&dpr=1',
            img3:'https://imgshopnewgumlet.lbb.in/catalog/product/p/2/p2_2__1.jpg?fm=webp&w=750&h=500&dpr=1'
        },
        
        inStock: 2,
        reviews:'5/5'
        },

        {
            id:'5',
            title: 'Pot With Stand',
            
            price: 590,
            
            imageUrl: {
            img1:'https://imgshopnewgumlet.lbb.in/catalog/product/c/h/ch20302d.jpg?fm=webp&w=480&h=480&dpr=1',
            img2:'https://imgshopnewgumlet.lbb.in/catalog/product/c/h/ch20302d-a.jpg?fm=webp&w=750&h=500&dpr=1',
            img3:'https://imgshopnewgumlet.lbb.in/catalog/product/c/h/ch20302d-c.jpg?fm=webp&w=750&h=500&dpr=1'
        },
            
        inStock: 2,
            reviews:'4/5'
            },

            {
                id:'6',
                title:'Table Top Planter',
                price:799,
                imageUrl:{
                    img1:'https://imgshopnewgumlet.lbb.in/catalog/product/2/4/24.2.2_table_top_planter_-_bamboo.jpg?fm=webp&w=480&h=480&dpr=1',
                    img2:'https://imgshopnewgumlet.lbb.in/catalog/product/2/4/24.1_table_top_planter_-_bamboo.jpg?fm=webp&w=750&h=500&dpr=1',
                    img3:'https://imgshopnewgumlet.lbb.in/catalog/product/2/4/24.2.1_table_top_planter_bamboo.jpg?fm=webp&w=750&h=500&dpr=1'
                },
                inStock:5,
                reviews:'4.5/5'
            }

    ]

    const showGDitems=gardenDecorItems.map((item)=>{
        
        return <Col key={item.id}>
           
        
        <Card style={{width:'18rem'}}>
            <Card.Header className="text-center">{item.title}</Card.Header>
            
            <Link to={{pathname:`/productDetails/${item.id}`, state:{id:item.id,title:item.title,price:item.price,imageUrl:item.imageUrl,inStock:item.inStock,reviews:item.reviews}}}> 
            <Card.Img className={classes.imgHover} variant="top" src={item.imageUrl.img1} height='350rem'/></Link>
            <Card.Body className="d-flex justify-content-between">

            <Card.Title>Rs. {item.price}</Card.Title>
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