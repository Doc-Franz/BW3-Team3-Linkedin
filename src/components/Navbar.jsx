import { Button, Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Linkedin, Search, HouseDoorFill, PeopleFill, SuitcaseLgFill, ChatDotsFill, BellFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Linkedin />
          <Form className="d-flex">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Search />
              </InputGroup.Text>
              <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </InputGroup>
          </Form>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Row className="d-flex flex-column ">
                <Col className="d-flex justify-content-center">
                  <HouseDoorFill />
                </Col>
                <Col>
                  <Nav.Link href="#action1">Home</Nav.Link>
                </Col>
              </Row>
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Row className="d-flex flex-column ">
                <Col className="d-flex justify-content-center">
                  <PeopleFill />
                </Col>
                <Col>
                  <Nav.Link href="#action1">Rete</Nav.Link>
                </Col>
              </Row>
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Row className="d-flex flex-column ">
                <Col className="d-flex justify-content-center">
                  <SuitcaseLgFill />
                </Col>
                <Col>
                  <Nav.Link href="#action1">Lavoro</Nav.Link>
                </Col>
              </Row>
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Row className="d-flex flex-column ">
                <Col className="d-flex justify-content-center">
                  <ChatDotsFill />
                </Col>
                <Col>
                  <Nav.Link href="#action1">Messaggistica</Nav.Link>
                </Col>
              </Row>
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Row className="d-flex flex-column ">
                <Col className="d-flex justify-content-center">
                  <BellFill />
                </Col>
                <Col>
                  <Nav.Link href="#action1">Notifiche</Nav.Link>
                </Col>
              </Row>
            </Link>

            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
