import { Col, Container, Form, Image, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Linkedin, Search, HouseDoorFill, PeopleFill, SuitcaseLgFill, ChatDotsFill, BellFill, Grid3x3GapFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import { fetchExperiences } from "../redux/actions/experienceActions";
import { useEffect } from "react";

function MyNavbar() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.hero.content);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo._id) {
      dispatch(fetchExperiences(userInfo._id));
    }
  }, [dispatch, userInfo]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Row>
            <Col className="d-flex">
              {" "}
              {/* LinkedIn Icon */}
              <Linkedin size={60} style={{ color: "#0077b5" }} />
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
            <Col className="d-flex justify-content-start">
              {" "}
              {/* Navbar Links */}
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <HouseDoorFill style={{ width: "20px", height: "20px" }} />
                    </Col>
                    <Col>
                      <Nav.Link href="#action1">Home</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/rete" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <PeopleFill style={{ width: "20px", height: "20px" }} />
                    </Col>
                    <Col>
                      <Nav.Link href="#action2">Rete</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/lavoro" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <SuitcaseLgFill style={{ width: "20px", height: "20px" }} />
                    </Col>
                    <Col>
                      <Nav.Link href="#action3">Lavoro</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/messaggistica" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <ChatDotsFill style={{ width: "20px", height: "20px" }} />
                    </Col>
                    <Col>
                      <Nav.Link href="#action4">Messaggistica</Nav.Link>
                    </Col>
                  </Row>
                </Link>
                <Link to="/notifiche" style={{ textDecoration: "none" }}>
                  <Row className="d-flex flex-column align-items-center">
                    <Col className="d-flex justify-content-center">
                      <BellFill style={{ width: "20px", height: "20px" }} />
                    </Col>
                    <Col>
                      <Nav.Link href="#action5">Notifiche</Nav.Link>
                    </Col>
                  </Row>
                </Link>

                {/* Profile Image */}
                <Col className="d-flex flex-column align-items-center">
                  {userInfo && <Image style={{ height: "24px", width: "24px", objectFit: "cover" }} roundedCircle src={userInfo.image} />}
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
            <Col className="ms-auto">
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
