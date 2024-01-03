import React from "react"; //Importation de react
import {
  Container,
  NavDropdown,
  Nav,
  Navbar,
  Button,
  Card,
} from "react-bootstrap"; //Importation de tous les éléments bootstraps

const App = () => {
  return (
    <div className="App">
      {/*Importation de la navbar*/}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Workout bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Accueil</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <NavDropdown title="propos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"> Boutique</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Explorer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card.Title>Card Title</Card.Title>
      {/*Importation des cards*/}
      <Card
        style={{
          width: "18rem",
        }}
      >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>1ère Card</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>2ième card</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body>
          <Card.Title>3ième Card</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default App;
