import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import "./Card.css"

function Cards() {
  return (
  <Fragment>

<div className='divEstudios'>
  <h3>Estudios</h3>
</div>
    <div className="CardStyle">
 <Card style={{ width: '20rem' }} className="card">
          <Card.Img variant="top" src="https://i.postimg.cc/2ymzNYQP/certificadogoogle.png" className="cardImage"/>
          <Card.Body>
            <Card.Title>Google Actívate</Card.Title>
            <Card.Text>
                -Certificado de introducción al Desarrollo Web I
            </Card.Text>
            <Button variant="primary">Ver certificado</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }} className="card">
        <Card.Img variant="top" src="https://udemy-certificate.s3.amazonaws.com/image/UC-d6fe9df7-f793-4136-a59c-320e57088f4e.jpg?v=1665532255000" className="cardImage"/>
          <Card.Body>
            <Card.Title>Udemy</Card.Title>
            <Card.Text>
                -Programación y Desarrollo Web de Cero a Master.
            </Card.Text>
            <Button variant="primary">Ver certificado</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }} className="card">
          <Card.Img variant="top" src="https://scontent.fsyq6-1.fna.fbcdn.net/v/t39.30808-6/313407838_488322499989356_4951568848365297466_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1FeXoKeGPGAAX-EFGCL&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfCg3_BS86GKaV28CxgMTcg0hBXlxSmYEY59dHURQyNqRg&oe=63CF43F4"className="cardImage" />
          <Card.Body>
            <Card.Title>Universidad Hispanoamericana de Costa Rica</Card.Title>
            <Card.Text>
                -Técnico FrontEnd para Web.
            </Card.Text>
            <Button variant="primary">Ver certificado</Button>
          </Card.Body>
        </Card>
        </div>
        </Fragment>

      );
     }


export {Cards};