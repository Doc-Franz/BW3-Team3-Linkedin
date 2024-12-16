import { Col, Container, Form, Image, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Linkedin, Search, HouseDoorFill, PeopleFill, SuitcaseLgFill, ChatDotsFill, BellFill, Grid3x3GapFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Row>
            <Col className="d-flex">
              {" "}
              {/* LinkedIn Icon */}
              <Linkedin size={30} style={{ color: "#0077b5" }} />
              {/* Search Input */}
              <Form className="d-flex ms-3">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Search />
                  </InputGroup.Text>
                  <Form.Control placeholder="Username" aria-label="Cerca" aria-describedby="basic-addon1" />
                </InputGroup>
              </Form>
            </Col>
            <Col>
              {" "}
              {/* Navbar Links */}
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <HouseDoorFill />
                    </Col>
                    <Col>
                      <Nav.Link href="#action1">Home</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/rete" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <PeopleFill />
                    </Col>
                    <Col>
                      <Nav.Link href="#action2">Rete</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/lavoro" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <SuitcaseLgFill />
                    </Col>
                    <Col>
                      <Nav.Link href="#action3">Lavoro</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/messaggistica" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <ChatDotsFill />
                    </Col>
                    <Col>
                      <Nav.Link href="#action4">Messaggistica</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/notifiche" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <BellFill />
                    </Col>
                    <Col>
                      <Nav.Link href="#action5">Notifiche</Nav.Link>
                    </Col>
                  </Row>
                </Link>

                {/* Profile Image */}
                <Col className="d-flex flex-column align-items-center">
                  <Image
                    style={{ height: "17px", width: "17px", objectFit: "cover" }}
                    roundedCircle
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" //Immagine profilo da importare dalla fetch
                  />
                  {/* Dropdown Menu below the profile image */}
                  <NavDropdown title="Tu" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Col>
              </Nav>
            </Col>
            <Col>
              <Row className="d-flex flex-column ">
                <Col className="d-flex justify-content-center">
                  <Grid3x3GapFill />
                </Col>
                <Col className="d-flex justify-content-center">
                  <NavDropdown title="Per le aziende" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
