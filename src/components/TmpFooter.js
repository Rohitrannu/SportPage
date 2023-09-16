import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaYoutube, } from "react-icons/fa";
import { AiOutlinePhone, } from "react-icons/ai";
import { FcAssistant, FcApproval, FcCustomerSupport } from "react-icons/fc";

function TmpFooter() {
    return (
        <>
        
            <Row className='row1st'>
                <Col> <h4 className='sameClassFooter'>
                    JS SPORT COMPLEX(kurukshetra)
                </h4>
                    <p className='large sameClassFooter'>
                        Army physical and Yoga
                    </p></Col>
                <Col> <h4>
                    SUBSCRIBE <FcApproval style={{ marginInline: "12px" }} />
                </h4>
                    <form action='#' className='form-sub' >
                        <input type='email' className='plac' required autoComplete='off' placeholder='Email'>


                        </input>
                       <button className='subscribe' type='submit'>Subscribe</button>
                    </form></Col>
                <Col>
                    <h4>Follows Us <FcAssistant style={{ marginInline: "13px" }} /></h4>

                    <div className="footer-social--icons">
                        <div>
                            <a
                                href="https://m.facebook.com/100036822947323/"
                                target="#blank">
                                <FaFacebookSquare className="icons" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com/j_s_sports_complex_8607338099/"
                                target="#blank">
                                <FaInstagram className="icons" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.youtube.com/@jssportscomplextangour7610"
                                target="#blank">
                                <FaYoutube className="icons"/>
                            </a>
                        </div>
                    </div></Col>
                <Col>
                    <div className="footer-contact">
                        <h4>Call Us<FcCustomerSupport /> </h4>
                        <h4 className='callus'>+91 74048-94483   <AiOutlinePhone className='icon-phone' style={{ marginInline: "17px" }} /></h4>
                    </div>
                </Col>
            </Row>
            <Row className='row2nd'>
            <hr className='hr'/>
            </Row>
       
        </>
    );
}

export default TmpFooter;