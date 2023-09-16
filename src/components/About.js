import React, { useState } from "react";
import howToUseApp from "./howToUse.js";
import {howToUseAppMy} from "./howToUse.js";
import amryImg from './image/pexels-lucky-trips-2802403.jpg'
import armyImg2 from './image/pexels-pixabay-163443.jpg'

const About = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  const [ aboutDataMy,setAboutDataMy]=useState(howToUseAppMy);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img className="img-army" src={armyImg2} alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- About js Sport Complex
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-about">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- Js Sport Complex physical work</h3>
              <h1 className="main-heading">
                World class training is <br /> available 24/7
              </h1>

              {aboutDataMy.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id } >
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-about">learn more</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img className="img-army2nd" src={amryImg}  alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;