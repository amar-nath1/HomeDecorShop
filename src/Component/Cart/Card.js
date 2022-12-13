
import classes from './Card.module.css'

const Card=(props)=>{

    return (

        <div align='left' className={`${classes.card} ${props.className}`}>{props.children}</div>

    )
}

export default Card