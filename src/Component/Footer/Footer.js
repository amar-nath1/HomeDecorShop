import { Button, ButtonGroup, Card } from "react-bootstrap"

import classes from "../../Store.module.css"

const Footer=()=>{

    return (
        <div className={classes.tmhHeader}>
        <Card className="text-center fixed-bottom">

        
        
        <Card.Footer className="text-muted d-flex justify-content-between">
        <h5> Take Me Home Decor</h5>
        <p>@tmh- All Rights Reserved</p>
        <ButtonGroup aria-label="Basic example" className='d-flex justify-content-end'>
      <Button variant="secondary">FaceBook</Button>
      <Button variant="secondary">Youtube</Button>
      <Button variant="secondary">Twitter</Button>
      <Button variant="secondary">LinkedIn</Button>
    </ButtonGroup>
            
        </Card.Footer>
        
        </Card>
        </div>
        
    )
}

export default Footer