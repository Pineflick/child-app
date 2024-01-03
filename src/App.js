// App.js

import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Registration from './components/Registration';
import ChildrenList from './components/ChildList';
import ChildProfile from './components/ChildProfile';
import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import './components/stylesheet.css'

const App = () => {
  return (
        
    <>
      <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container>
        <Navbar.Brand href="#home">Child Registration Prototype</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/children-list">Registered Children</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/children-list" element={<ChildrenList />} />
        <Route path="/child-profile/:childId" element={<ChildProfile />} />
    </Routes></>       
    
  );
};

export default App;
