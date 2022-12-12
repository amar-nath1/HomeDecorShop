import { Button, ButtonGroup, Card } from "react-bootstrap"


const Footer=()=>{

    return (
        
        <Card className="text-center">

        
        
        <Card.Footer className="text-muted d-flex justify-content-between">
        <h3> Take Me Home Decor</h3>
        <ButtonGroup aria-label="Basic example" className='d-flex justify-content-end'>
      <Button variant="secondary">FaceBook</Button>
      <Button variant="secondary">Youtube</Button>
      <Button variant="secondary">Twitter</Button>
      <Button variant="secondary">LinkedIn</Button>
    </ButtonGroup>
            
        </Card.Footer>
        
        </Card>
        
    )
}

export default Footer