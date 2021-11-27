import React, { Component } from 'react';
import { Container, Image} from 'react-bootstrap';
import Coding from '../../img/coding.svg';

import './style.css';


export default class Content extends Component {    
    render() {

        return (
            <Container fluid className="main-container d-none d-sm-block">
                <section id="container">
                    <div>
                            <Image src={Coding} />                     
                            <p>Estamos trabalhando nisso :)</p>
                    </div>
                </section>
                <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
            </Container>
        )
    }
}