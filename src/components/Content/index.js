import React, { Component } from 'react';
import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import LogoFieto from '../../img/logo_fieto.png';
import LogoCrp from '../../img/logo_crp.png';
import LogoCeulp from '../../img/logo_ceulpulbra.png';
import LogoUnicesumar from '../../img/logo_unicesumar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faJava,
        faPhp,
        faHtml5,
        faCss3Alt,
        faJsSquare,
        faReact,
        faAngular,
        faVuejs,
        faNode,
        faYarn,
        faNpm,
        faBootstrap,
        faGitAlt,
        faJenkins,
        faBitbucket,
        faCpanel,
        faDocker,
        faGitkraken,
        faGitlab,
        faLinux,
        faMicrosoft,
        faMarkdown,
        faPython,
        faTrello,
        faWordpress,
        faLaravel,
        faSlackHash,
        faAws
    } from '@fortawesome/free-brands-svg-icons';

import './style.css';


export default class Content extends Component {    
    render() {

        const skillsIconsOne = [
            { title: 'Java', icon: faJava },
            { title: 'PHP', icon: faPhp },
            { title: 'Python', icon: faPython },
            { title: 'HTML5', icon: faHtml5 },
            { title: 'CSS3', icon:  faCss3Alt},
            { title: 'Javascript', icon:  faJsSquare },
            { title: 'React', icon:  faReact },
            { title: 'Angular', icon:  faAngular },
            { title: 'Vue', icon:  faVuejs },
            { title: 'Nodejs', icon:  faNode },
            { title: 'Yarn', icon:  faYarn },
            { title: 'NPM', icon:  faNpm},
            { title: 'Bootstrap', icon:  faBootstrap},            
            { title: 'Jenkins', icon:  faJenkins},
            { title: 'Bitbucket', icon:  faBitbucket},
        ];

        const skillsIconsTwo = [
            { title: 'CPanel', icon:  faCpanel },
            { title: 'Docker', icon:  faDocker },
            { title: 'Git', icon:  faGitAlt},
            { title: 'GitKraken', icon: faGitkraken },
            { title: 'GitLab', icon: faGitlab },
            { title: 'Linux', icon: faLinux },
            { title: 'Microsoft', icon: faMicrosoft },
            { title: 'Markdown', icon: faMarkdown },            
            { title: 'Trello', icon: faTrello },
            { title: 'Wordpress', icon: faWordpress },
            { title: 'Laravel', icon: faLaravel },
            { title: 'Slack', icon: faSlackHash },
            { title: 'Amazon Web Services', icon: faAws },            
        ];

        return (
            <Container fluid className="main-container d-none d-sm-block">
                <Row id="section-experience">
                    <Col>
                        <h2>EXPERIENCE</h2>
                    </Col>
                </Row>
                <br/>
                <Row className="experience-list">
                    <Col>
                        <div className="experience-item">
                            <div>
                                <a href="http://sistemafieto.com.br" target="_blank">
                                    <Image src={LogoFieto} />
                                </a>
                            </div>
                            <div>
                                <h3>SYSTEM ANALYST</h3>
                                <span>SISTEMA FIETO - PALMAS, TO</span>
                            </div>
                        </div>
                    </Col>                    
                    <Col className="experience-date">
                        05/2019 - Current
                    </Col>
                </Row>
                <Row className="experience-list">
                    <Col>
                        <div className="experience-item">
                            <div>
                                <a href="https://www.crptecnologia.com.br" target="_blank">
                                    <Image src={LogoCrp} />
                                </a> 
                            </div>
                            <div>
                                <h3>SOFTWARE ENGINEER</h3>
                                <span>CRP TECNOLOGIA - PALMAS, TO</span>
                            </div>
                        </div>                                               
                    </Col>                   
                    <Col className="experience-date">
                        11/2017 - 04/2019
                    </Col>
                </Row>
                <Row className="experience-list">
                    <Col>
                        <div className="experience-item">
                            <div>
                                <a href="http://ulbra-to.br" target="_blank">
                                    <Image src={LogoCeulp} />
                                </a>
                            </div>
                            <div>                                    
                                <h3>TEAM LEADER / PHP AND JAVASCRIPT SOFTWARE ENGINEER</h3>
                                <span>CEULP/ULBRA - PALMAS, TO</span>
                            </div>
                        </div>                        
                    </Col>
                    <Col className="experience-date">
                        05/2014 - 11/2017
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <span>
                            FULL PROFILE ON <a href="https://www.linkedin.com/in/robson-gomes-575396b5" target="_blank">LINKEDIN</a>
                        </span>
                    </Col>
                </Row>
                <br/><br/><br/><br/><br/><br/><br/>
                <Row id="section-education">
                    <Col>
                        <h2>EDUCATION</h2>
                    </Col>
                </Row>
                <br/>
                <Row className="experience-list">
                    <Col>
                        <div className="experience-item">
                            <div>
                                <a href="https://www.unicesumar.edu.br" target="_blank">
                                    <Image src={LogoUnicesumar} />
                                </a>
                            </div>
                            <div>                                    
                                <h3>UNICESUMAR</h3>
                                <span>Postgraduate in Database</span>
                            </div>
                        </div>                         
                    </Col>                   
                    <Col className="experience-date">
                        2020 - 2021
                    </Col>
                </Row>
                <Row className="experience-list">
                    <Col>
                        <div className="experience-item">
                            <div>
                                <a href="https://www.unicesumar.edu.br" target="_blank">
                                    <Image src={LogoUnicesumar} />
                                </a>
                            </div>
                            <div>                                    
                                <h3>UNICESUMAR</h3>
                                <span>Postgraduate in Practice of Agile Methodologies</span>
                            </div>
                        </div>                            
                    </Col>                    
                    <Col className="experience-date">
                        2019 - 2020
                    </Col>
                </Row>
                <Row className="experience-list">
                    <Col>
                        <div className="experience-item">
                            <div>
                                <a href="http://ulbra-to.br" target="_blank">
                                    <Image src={LogoCeulp} />
                                </a>
                            </div>
                            <div>                                    
                                <h3>CENTRO EDUCACIONAL LUTERANO DE PALMAS - CEULP/ULBRA</h3>
                                <span>COMPUTER SCIENCE</span>
                            </div>
                        </div>                         
                    </Col>                    
                    <Col className="experience-date">
                        2013 - 2018
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <span>
                            FULL PROFILE ON <a href="https://www.linkedin.com/in/robson-gomes-575396b5" target="_blank">LINKEDIN</a>
                        </span>
                    </Col>
                </Row>
                <br/><br/><br/><br/><br/><br/><br/>
                <Row id="section-skills">
                    <Col>
                        <h2>SKILLS</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <span>PROGRAMMING LANGUAGES & TOOLS</span>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <div className="list-skills">
                            {skillsIconsOne.map(skill => (                                
                                <OverlayTrigger key={skill.title} placement="top" overlay={
                                    <Tooltip>
                                        {skill.title}
                                    </Tooltip>                                    
                                }>       
                                    <FontAwesomeIcon icon={skill.icon} size="2x" />   
                                </OverlayTrigger>                                   
                            ))}                                                                           
                        </div>
                    </Col>                    
                </Row>
                <br/>
                <Row>
                    <Col>
                        <div className="list-skills">                            
                            {skillsIconsTwo.map(skill => (                                
                                <OverlayTrigger key={skill.title} placement="top" overlay={
                                    <Tooltip>
                                        {skill.title}
                                    </Tooltip>
                                }>       
                                    <FontAwesomeIcon icon={skill.icon} size="2x" />   
                                </OverlayTrigger>                                   
                            ))}                        
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}