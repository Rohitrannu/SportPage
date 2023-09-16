import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import homePic from "./image/rf5g_1kzy_210202.jpg";
import Button from 'react-bootstrap/Button';
import Slider from './Slider';
import CardImg from './CardImg';
function Home() {
  return (

    <>
    <Container>
      
      <Row className='m-5'>
        {/* <Col><img src={homePic} className="w-50 "/></Col> */}
        <Col className='title'style={{margin: 'auto'}}> JS Sport Complex Academics very hard traing running. If you love indian army so you join my Academics
        
        </Col>
      </Row>
      
    </Container>
    <Slider/>
    <CardImg/>
    </>
  );
}

export default Home;

