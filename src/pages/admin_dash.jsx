import React from 'react'
import { Card } from 'react-bootstrap';
import './page.css'

function Log_in_Dash() {
  return ( <div className='container-flex'>
    <div className='imgs'>
    <Card >
        <Card.Img id='img' variant="top" src="/images/wed/w (1).jpg" />
        <Card.Body>
          <Card.Text>
            <button>Admin</button>
          </Card.Text>
        </Card.Body>
      </Card>  
      <Card >
        <Card.Img id='img' variant="top" src="/images/wed/w (1).jpg" />
        <Card.Body>
          <Card.Text>
            <button>User</button>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card >
        <Card.Img id='img' variant="top" src="/images/wed/w (1).jpg" />
        <Card.Body>
          <Card.Text>
            <button>Photographer</button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card >
        <Card.Img id='img' variant="top" src="/images/wed/w (1).jpg" />
        <Card.Body>
          <Card.Text>
            <button>Cinematographer</button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card >
        <Card.Img id='img' variant="top" src="/images/wed/w (1).jpg" />
        <Card.Body>
          <Card.Text>
            <button>Editor</button>
          </Card.Text>
        </Card.Body>
      </Card> 
     
      
      </div>
      
      
    </div>
   );
}


export default Log_in_Dash