import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Mobile from './components/Mobile';
//import { Col, Row, Container } from 'react-bootstrap'
import './redirect';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Mobile />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
