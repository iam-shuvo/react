
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Ad_side() {
  const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/add_user');
    };
    const handleClick2= ()=>{
      navigate('/userlist');
  };
  const handleClick3= ()=>{
    navigate('/addpg');
};
  const handleClick4= ()=>{
    navigate('/pglist');
};
    const myStyle = {
      color: "white",
      
      padding: "10px",
      fontFamily: "poppins",
     
    };
    const myStyle2 = {
      height:"100%",
      paddingTop:"50px",
      hover:"red"
      
     
    };
  
  return (
    <div className="container-fluid" style={myStyle2}>
      <Row>
      <Col sm={2}>
      <Accordion defaultActiveKey="0"style={myStyle}>
      <Accordion.Item eventKey="0">
        <Accordion.Header >User</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item action onClick={handleClick}>Add User</ListGroup.Item>
    </ListGroup>
    <br />
    <ListGroup>
    <ListGroup.Item action onClick={handleClick2}>Manage User</ListGroup.Item>
    </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
      

      <Accordion.Item eventKey="1">
        <Accordion.Header>PhotoGrapher</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item action onClick={handleClick3}>Add Photographer</ListGroup.Item>
    </ListGroup>
    <br />
    <ListGroup>
    <ListGroup.Item action onClick={handleClick4}>Manage Photographer</ListGroup.Item>
    </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>CinemetoGrapher</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item action onClick={handleClick}>Add Cinematographer</ListGroup.Item>
    </ListGroup>
    <br />
    <ListGroup>
    <ListGroup.Item action onClick={handleClick2}>Manage Cinematogrpaher</ListGroup.Item>
    </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Editor</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item action onClick={handleClick}>Add User</ListGroup.Item>
    </ListGroup>
    <ListGroup>
    <ListGroup.Item action onClick={handleClick2}>User Detail</ListGroup.Item>
    </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Appointment</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item action onClick={handleClick}>Appointment List</ListGroup.Item>
    </ListGroup>
    
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col sm={10}></Col>
    </Row>
    </div>
  );
}

export default Ad_side;