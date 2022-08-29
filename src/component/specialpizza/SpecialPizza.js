import React, {useState} from 'react'
import {Card, Row, Col, Modal } from 'react-bootstrap';
import '../specialpizza/SpecialPizza.css'



const SpecialPizza = ({x}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem',  marginTop: '10%', marginBottom:'5%' }}>
      <Card.Img variant="top" 
      style={{height:'256px', cursor:'pointer'}} 
      src={x.image} 
      onClick={handleShow}
      />
      <Card.Body>
        <Card.Title style={{color: '#e06377'}} >{x.name}</Card.Title>
        <hr/>
        <Card.Text>
        <Row>
          <Col md={6} lg={6}>
          
          </Col>

          <Col md={6} lg={6}>
            
          </Col>
        </Row>
        </Card.Text>
        <Row>
          <Col md={6} lg={6}>
            <h5>Price:  {x.prices}  </h5>
          </Col>
          <Col md={6} lg={6}>
        </Col>
        </Row>
      </Card.Body>
    </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{x.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div> 
      <Card.Img variant="top" 
      style={{height:'256px'}} 
      src={x.image} />
      </div>
      <div style={{marginTop:'2%', color: '#c83349'}} >
        <h2>Description:</h2>
      </div>
      <div>
        <h4>{x.description}</h4>
      </div>
      </Modal.Body>
       
      </Modal>
   
 
    </>
  )
}

export default SpecialPizza