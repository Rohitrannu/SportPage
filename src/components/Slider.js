import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import My from "./image/IMG-20200615-WA0011.jpg";
import Photo from "./image/IMG-20201013-WA0011.jpg";
import Pic from "./image/SAVE_20200621_112817.jpg";




const Slider = () => {
  return (
    <>
    <div className=' container' >
       <Carousel   >
      <Carousel.Item interval={1000} >
        <img
          className="d-block w-100"
          src={My}
          alt="this is image"
        />
        <Carousel.Caption >
       
          <h3><p className='slider_text'>Yoga is a discipline that opens the door to inner freedom.</p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Photo}
          alt="Second slide"
        />
        <Carousel.Caption>
        
          <h3>  <p className='slider_text'> A running buddy is someone who pushes you, motivates you and supports you through all the joys and struggles of running.</p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic}
          alt="Third slide"
        />
        <Carousel.Caption>
       
          <h3><p className='slider_text' >
          One run can change your day, many runs can change your life.
          </p></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Slider
