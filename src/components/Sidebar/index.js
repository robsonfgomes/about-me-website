import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Sunset from '../../img/sunset.jpg';
import Me from '../../img/me.jpeg';

import './style.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="vertical-nav d-none d-sm-block">
                <Row>
                    <Col>
                        <div className="img-background">                            
                            <Image src={Sunset} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="avatar">
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
                <Row className="">
                    <Col>
                        <div className="flex-column nav">                                                
                            <a href="#section-experience">EXPERIENCE</a>
                            <a href="#section-education">EDUCATION</a>
                            <a href="#section-skills">SKILLS</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="icons-contact">
                            <a href="https://github.com/robsonfgomes" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="lg" />                                
                            </a>                           
                            <a href="https://www.linkedin.com/in/robson-gomes-575396b5" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />                                
                            </a>
                            <a href="https://www.instagram.com/robson_fgomes" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />                                
                            </a>                              
                            <a href="https://www.facebook.com/robsonfrgomes" target="_blank">
                                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />                                
                            </a>  
                            <a href="https://twitter.com/RobsonGom3s" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />                                
                            </a>                          
                        </div>
                    </Col>
                </Row>                                  
            </div>
        )
    }
}