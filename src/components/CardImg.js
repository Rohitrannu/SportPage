import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


import { Row, Col, Container } from 'react-bootstrap';



export default function () {
  return (
    <>
      <div className='Container2'>
        <Container  >
          <Row className='parent'>
            <Col md={3}   >
              <Card className='card' style={{ width: '18rem' }} >
                <Card.Img className='img-round'  variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bhagat_Singh_1929.jpg/220px-Bhagat_Singh_1929.jpg" />
                <Card.Body>
                  <Card.Title >Bhagat Singh</Card.Title>
                  <Card.Text className='card-text'>
                    “They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit.”
                  </Card.Text>
                  <a href="https://en.wikipedia.org/wiki/Bhagat_Singh" target="#blank">
                    <Button className='cards__item__link' variant="primary">Read more storie</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img className='img-round'  variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chandrasekhar_Azad.jpg/220px-Chandrasekhar_Azad.jpg" />
                <Card.Body>
                  <Card.Title>Chandra Shekhar Sitaram</Card.Title>
                  <Card.Text>
                    “Don’t see others doing better than you, beat your own records every day because success is a fight between you and yourself.”
                  </Card.Text>
                  <a href="https://en.wikipedia.org/wiki/Chandra_Shekhar_Azad" target="#blank">
                  <Button className='cards__item__link' variant="primary">Read more storie</Button>
                  </a>
                </Card.Body>
              </Card>

            </Col>
            <Col md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img className='img-round' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/220px-Subhas_Chandra_Bose_NRB.jpg" />
                <Card.Body>
                  <Card.Title>Subhas Chandra Bose </Card.Title>
                  <Card.Text>
                    "One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives."
                  </Card.Text>
                  <a href="https://en.wikipedia.org/wiki/Subhas_Chandra_Bose" target="#blank">
                  <Button className='cards__item__link' variant="primary">Read more storie</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img className='img-round' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Pandit_Ram_Prasad_Bismil.jpg/200px-Pandit_Ram_Prasad_Bismil.jpg" />
                <Card.Body>
                  <Card.Title>Ram Prasad Bismil  </Card.Title>
                  <Card.Text>

                    “Sarfaroshi ki tamanna ab hamare dil mein hai, dekhna ki zor kitna baazu-e-qatil mein hai.”
                  </Card.Text>
                  <a href="https://en.wikipedia.org/wiki/Ram_Prasad_Bismil" target="#blank">
                  <Button className='cards__item__link' variant="primary">Read more storie</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

