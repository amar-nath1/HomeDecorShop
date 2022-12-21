
import { Card, Container } from "react-bootstrap"
import GardenDecor from "./GardenDecor"
import WallDecor from "./WallDecor"
import classes from './Item.module.css'


const Items=()=>{

    return (
        <>
        <GardenDecor></GardenDecor>
        <Container className={classes.design}>
            <Card.Img style={{width:'30rem'}} src='https://static.wixstatic.com/media/ebc9f2_355510e4ed40451fab486b9de174ac19~mv2.png/v1/fill/w_605,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngfind_com-vertical-divider-png-2045455.png'></Card.Img>
            <Card.Img style={{width:'30rem'}} src='https://static.wixstatic.com/media/ebc9f2_355510e4ed40451fab486b9de174ac19~mv2.png/v1/fill/w_605,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngfind_com-vertical-divider-png-2045455.png'></Card.Img></Container>
        
        <WallDecor></WallDecor>
        
        </>
    )
}

export default Items