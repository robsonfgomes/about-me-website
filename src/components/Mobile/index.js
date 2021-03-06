import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Sunset from '../../img/sunset.jpg';
import Me from '../../img/me.jpeg';

import './style.css';

export default class Mobile extends Component {
    render() {
        return (
            <div className="vertical-nav-mobile d-block d-sm-none">
                <Row>
                    <Col>
                        <div className="img-background-mobile">                            
                            <Image src={Sunset} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="avatar-mobile">
                            <Image src={Me} />                                                        
                        </div> 
                        <div className="text-bio">
                            <span className="name">Robson Gomes</span>                            
                            <span className="description">Software Engineer</span>
                            <span className="description">Palmas, TO</span>                                                        
                        </div>                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="flex-column description-bio">
                            <span className="">PHP & Javascript developer that loves to work with challenging and creative projects.</span>
                        </div>
                    </Col>
                </Row>                
                <Row>
                    <Col>
                        <div className="icons-contact-mobile">
                            <a href="https://github.com/robsonfgomes" target="_blank" id="iconsContactFirstIcon">
                                <FontAwesomeIcon icon={faGithub} size="lg" />                                
                            </a>                           
                            <a href="https://www.linkedin.com/in/robsonfgomes" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />                                
                            </a>
                            <a href="https://www.instagram.com/robson_fgomes" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />                                
                            </a>                              
                            <a href="https://www.facebook.com/robsonfrgomes" target="_blank">
                                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />                                
                            </a>  
                            <a href="mailto:fgomes.robson@gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />                                
                            </a>                          
                        </div>
                    </Col>
                </Row>                                  
            </div>
        )
    }
}