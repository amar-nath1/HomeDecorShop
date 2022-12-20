import { useState } from "react"
import { Card, Col, Container, Navbar, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import NavLinks from "../Component/NavBar/NavLinks"
import classes from './ProductDetail.module.css'

const ProductDetail=()=>{


    const location=useLocation()
    const {id,title,price,imageUrl,quantity,reviews}=location.state || {}

    const [imgShow, setImgShow]=useState(imageUrl.img1)
    
    
    return (
<>
        <Navbar bg='dark' expand='sm' variant='dark' className="navbar-static-top">
        <NavLinks></NavLinks>
        </Navbar>

        

        <div className='d-flex justify-content-start m-4'>  
                
                <Card className='m-3' style={{width:'20rem',height:'25rem'}}>
                <Card.Img className={classes.imgHover} src={imgShow} style={{width:'20rem',height:'25rem'}}></Card.Img>
                </Card>
                
                
                <Card.Body className='m-5 p-2'>
                    <Card.Title className='p-2'> {title}</Card.Title>
                    <Card.Subtitle className='p-2'>Item ID - {id}</Card.Subtitle>
                    <Card.Text className='p-2'><h4>Rs. {price}</h4></Card.Text>

                    <Card.Text className='p-2'> Reviews - {reviews}</Card.Text>
                </Card.Body>
                
                
        </div>

        <Container className='d-flex justify-content-start m-1'>
           
        <Card className={classes.imgs}><Card.Img onMouseOver={()=>{setImgShow(imageUrl.img1)}} src={imageUrl.img1} style={{width:'5rem',height:'5rem'}}></Card.Img></Card>
        <Card className={classes.imgs}><Card.Img onMouseOver={()=>{setImgShow(imageUrl.img2)}} src={imageUrl.img2} style={{width:'5rem',height:'5rem'}}></Card.Img></Card>
        <Card className={classes.imgs}><Card.Img onMouseOver={()=>{setImgShow(imageUrl.img3)}} src={imageUrl.img3} style={{width:'5rem',height:'5rem'}}></Card.Img></Card>
                   
        </Container>
        </>
    )

}

export default ProductDetail